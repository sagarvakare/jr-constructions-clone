import { useState } from "react";
import api from "../api"; 
import { Link, useNavigate } from "react-router-dom";
import Trans from "../components/Trans";

function Register() {
  // Default role is USER
  const [formData, setFormData] = useState({ username: "", password: "", role: "USER" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simple Client-Side Validation
    if (formData.password.length < 3) {
        alert("Password must be at least 3 characters long");
        setLoading(false);
        return;
    }

    try {
      console.log("Sending Data:", formData); // Check console to see what you are sending
      
      const response = await api.post("/auth/register", formData);
      
      console.log("Registration Response:", response.data);
      alert("Registration Successful! Please login.");
      navigate("/login");

    } catch (err) {
      console.error("Registration Error Details:", err);
      
      // EXTRACT THE EXACT ERROR MESSAGE FROM BACKEND
      let errorMessage = "Registration failed.";
      
      if (err.response) {
          // Server responded with a status code (like 400)
          if (err.response.data) {
             // If backend sent a string message
             if (typeof err.response.data === 'string') {
                 errorMessage = err.response.data;
             } 
             // If backend sent a JSON object with a message field
             else if (err.response.data.message) {
                 errorMessage = err.response.data.message;
             }
          }
      } else if (err.request) {
          errorMessage = "Server not responding. Check your internet or backend status.";
      }

      alert(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-orange-500">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800"><Trans id="register.title">Create Account</Trans></h2>
        
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1"><Trans id="register.username">Username</Trans></label>
            <input 
                type="text" 
                placeholder="Enter username" 
                onChange={e => setFormData({...formData, username: e.target.value})} 
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 outline-none" 
                required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1"><Trans id="register.password">Password</Trans></label>
            <input 
                type="password" 
                placeholder="Enter password" 
                onChange={e => setFormData({...formData, password: e.target.value})} 
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 outline-none" 
                required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1"><Trans id="register.select_role">Select Role</Trans></label>
            <select 
              onChange={e => setFormData({...formData, role: e.target.value})} 
              className="w-full p-3 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.role}
            >
              <option value="USER"><Trans id="register.role.user">User (Standard)</Trans></option>
              <option value="ADMIN"><Trans id="register.role.admin">Admin (Manager)</Trans></option>
            </select>
          </div>

          <button 
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold text-white transition transform active:scale-95 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-900 hover:bg-blue-800'}`}
          >
            {loading ? <Trans id="register.registering">Registering...</Trans> : <Trans id="register.button">Register Now</Trans>}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
           <Trans id="register.have_account">Already have an account?</Trans> <Link to="/login" className="text-orange-600 font-bold hover:underline"><Trans id="register.login_here">Login here</Trans></Link>
        </p>
      </div>
    </div>
  );
}
export default Register;