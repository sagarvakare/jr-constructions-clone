import React, { useState, useEffect } from "react";
import api from "../api"; // ✅ Use the centralized API helper
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaSignOutAlt, FaHammer } from "react-icons/fa";
import Trans from "../components/Trans";

const AdminDashboard = ({ onLogout }) => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    icon: "FaHammer" // Default icon string
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 1. Fetch Services on Load
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await api.get("/services");
      setServices(response.data);
    } catch (err) {
      console.error("Failed to fetch services", err);
      // If 403/401, token might be expired
      if (err.response && (err.response.status === 403 || err.response.status === 401)) {
          alert("Session expired. Please login again.");
          onLogout();
      }
    }
  };

  // 2. Handle Add Service
  const handleAddService = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // ✅ POST request using api.js (Token is auto-attached)
      const response = await api.post("/services", newService);
      
      // Update UI instantly
      setServices([...services, response.data]);
      setNewService({ title: "", description: "", icon: "FaHammer" }); // Reset form
      alert("Service Added Successfully!");
    } catch (err) {
      console.error("Add Service Error:", err);
      setError("Failed to add service. Ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  // 3. Handle Delete Service
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;

    try {
      await api.delete(`/services/${id}`);
      setServices(services.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Delete Error:", err);
      alert("Failed to delete service.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* HEADER */}
      <div className="bg-gray-900 text-white p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <FaHammer className="text-orange-500" /> <Trans id="admin.dashboard.title">Admin Dashboard</Trans>
        </h1>
        <div className="flex gap-4">
            <button onClick={() => navigate("/")} className="text-gray-300 hover:text-white transition">
                <Trans id="admin.go_home">Go to Home</Trans>
            </button>
            <button 
            onClick={onLogout} 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 transition"
            >
            <FaSignOutAlt /> <Trans id="admin.logout">Logout</Trans>
            </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: ADD SERVICE FORM */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-fit">
          <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <FaPlus className="text-orange-500" /> <Trans id="admin.add_service">Add New Service</Trans>
          </h2>
          
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleAddService} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700"><Trans id="admin.service_title">Service Title</Trans></label>
              <input
                type="text"
                placeholder="e.g., House Renovation"
                value={newService.title}
                onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500 outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700"><Trans id="admin.description">Description</Trans></label>
              <textarea
                placeholder="Details about the service..."
                value={newService.description}
                onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                className="w-full p-3 border rounded focus:ring-2 focus:ring-orange-500 outline-none h-32"
                required
              />
            </div>

            <button
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold text-white transition ${loading ? "bg-gray-400" : "bg-blue-900 hover:bg-blue-800"}`}
            >
              {loading ? <Trans id="admin.adding">Adding...</Trans> : <Trans id="admin.add_service_button">Add Service</Trans>}
            </button>
          </form>
        </div>

        {/* RIGHT: LIST OF SERVICES */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-800"><Trans id="admin.existing_services">Existing Services</Trans></h2>
          
          {services.length === 0 ? (
            <p className="text-gray-500 italic"><Trans id="admin.no_services">No services found. Add one on the left!</Trans></p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.id} className="bg-white p-5 rounded-lg shadow border-l-4 border-orange-500 flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800"><Trans id={`service.title.${service.id}`}>{service.title}</Trans></h3>
                    <p className="text-gray-600 text-sm mt-1"><Trans id={`service.description.${service.id}`}>{service.description}</Trans></p>
                  </div>
                  <button 
                    onClick={() => handleDelete(service.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                    title="Delete Service"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;