import axios from 'axios';

// Access environment variable for backend URL
// On localhost, this might be undefined, so we can fallback or require .env
// In Vercel, this will be set in the project settings.
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const api = axios.create({
    baseURL: API_BASE,
});

export default api;
