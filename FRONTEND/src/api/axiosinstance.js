import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Simply return the response if successful
    return response;
  },
  error => {
    // Any status codes outside the range of 2xx cause this function to trigger
    if (error.response) {
      // Server responded with a status code outside 2xx
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
      // You can customize error messages or behaviors here
      // e.g., show notification, log out on 401, etc.
      
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
      
    } else {
      // Something happened when setting up the request
      console.error('Request setup error:', error.message);
    }
    // Return a rejected promise to propagate the error to caller
    return Promise.reject(error);
  }
);

export default axiosInstance;
