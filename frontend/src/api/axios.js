import axios from 'axios';

// This automatically chooses the right URL:
// - If running on Laptop: uses https://jr-constructions-clone.onrender.com
// - If running on Cloud: uses the real Cloud URL

const api = axios.create({
    // REPLACE THIS WITH YOUR NEW 'SH' URL
    baseURL: 'https://sh-constructions-backend.onrender.com', 
    headers: { 'Content-Type': 'application/json' }
});

// ... rest of the code

// Automatically attach the Login Token (if it exists)
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