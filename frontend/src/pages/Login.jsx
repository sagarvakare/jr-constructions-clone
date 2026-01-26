import { useState } from "react";
// REMOVE: import axios from "axios";
// ADD:
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import Trans from "../components/Trans";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Helper: Decode JWT Token manually
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/login", formData);
      
      // Backend returns: { username, role, message }
      // Since backend doesn't return a token, we'll create a simple session token
      const username = response.data.username || formData.username;
      let role = response.data.role;
      
      // Fallback if role is missing (Assume User)
      if (!role) {
         role = formData.username.toLowerCase().includes('admin') ? 'ADMIN' : 'USER';
      }

      // Normalize Role (Remove "ROLE_" prefix and uppercase)
      const finalRole = role.toString().replace(/^ROLE_/, '').toUpperCase();

      // Generate a simple session token (base64 encoded username:timestamp)
      // In production, backend should return a proper JWT token
      const sessionToken = btoa(`${username}:${Date.now()}`);

      console.log("Login Success:", { username, role: finalRole });

      // Success - pass the session token
      onLogin(username, sessionToken, finalRole);

    } catch (err) {
      console.error("Login Error:", err);
      // Smart Error Message
      const msg = err.response?.data?.message || "Login failed. Server might be restarting (Wait 1 min).";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-jr-blue">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6"><Trans id="login.title">Secure Login</Trans></h2>
        
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm font-bold text-center">{error}</div>}
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1"><Trans id="login.username">Username</Trans></label>
            <input 
              name="username" 
              onChange={e => setFormData({...formData, username: e.target.value})} 
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-jr-orange outline-none" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1"><Trans id="login.password">Password</Trans></label>
            <input 
              name="password" 
              type="password" 
              onChange={e => setFormData({...formData, password: e.target.value})} 
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-jr-orange outline-none" 
              required 
            />
          </div>
          
          <button disabled={isLoading} className="w-full bg-jr-blue text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition transform active:scale-95">
            {isLoading ? <Trans id="login.verifying">Verifying...</Trans> : <Trans id="login.button">Login to Dashboard</Trans>}
          </button>
        </form>
        
        <div className="mt-6 text-center border-t pt-4">
          <p className="text-sm text-gray-500"><Trans id="login.need_account">Need an account?</Trans></p>
          <Link to="/register" className="text-jr-orange font-bold hover:underline"><Trans id="login.register">Register New User</Trans></Link>
        </div>
      </div>
    </div>
  );
}

export default Login;