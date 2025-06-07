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
export default axiosInstance;

