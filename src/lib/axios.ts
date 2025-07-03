import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081' , 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

// Interceptor to catch errors
axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.code === 'ECONNABORTED') {
      console.log('Request timed out');
    } else if (!error.response) {
      //alert("Network Error")
      console.log('Network error:', error.message);
    } else {
      // if use console error made next error page appeear
      console.log('Response error:', error.response.status, error.response.data);
    }

    return Promise.reject(error); 
  }
);

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token'); // Retrieve token from session storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;

