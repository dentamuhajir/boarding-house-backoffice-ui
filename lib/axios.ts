import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com' , 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to catch errors
axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.code === 'ECONNABORTED') {
      console.error('⏰ Request timed out');
    } else if (!error.response) {
      console.error('📡 Network error:', error.message);
    } else {
      console.error('❌ Response error:', error.response.status, error.response.data);
    }

    return Promise.reject(error); 
  }
);
export default axiosInstance;
