import axios from "axios";

// Use environment variable for backend URL
const backendUrl = import.meta.env.VITE_APP_URL; // from .env file

const axiosInstance = axios.create({
  baseURL: backendUrl,  // dynamically set baseURL
  timeout: 10000,
  withCredentials: true
});

// Response interceptor (keep as is)
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
