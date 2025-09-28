import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 404) {
      console.error('API endpoint not found');
    } else if (error.response?.status >= 500) {
      console.error('Server error occurred');
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout');
    }
    
    return Promise.reject(error);
  }
);

// API methods
export const contactAPI = {
  // Send contact form
  sendMessage: (data) => api.post('/contact', data),
  
  // Get all messages (for admin)
  getAllMessages: () => api.get('/contact'),
};

export default api;
