import axios from 'axios';

// ⚠️ CRITICAL: YOU MUST REPLACE THE URL BELOW WITH YOUR RENDER BACKEND URL ⚠️
const api = axios.create({
    // Go to Render Dashboard -> Backend -> Copy the URL at the top left
    // It will look like: https://jr-constructions-clone.onrender.com
    baseURL: 'https://sh-constructions-backend.onrender.com', 
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;