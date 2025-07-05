import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081' , 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

// Interceptor to catch errors
// axiosInstance.interceptors.response.use(
//   response => response,
//   (error: AxiosError) => {
//     if (error.code === 'ECONNABORTED') {
//       console.log('Request timed out');
//     } else if (!error.response) {
//       //alert("Network Error")
//       console.log('Network error:', error.message);
//     } else {
//       // if use console error made next error page appeear
//       console.log('Response error:', error.response.status, error.response.data);
//     }

//     return Promise.reject(error); 
//   }
// );


// // Request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Ambil token dari sessionStorage
//     const token = sessionStorage.getItem('token');

//     // Jika token tidak ada, redirect ke login
//     if (!token) {
//       window.location.href = '/login'; // manual redirect
//       return Promise.reject('No token - Redirecting to login'); // batalkan request
//     }

//     // Jika token ada, tambahkan ke header Authorization
//     config.headers['Authorization'] = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem('token'); // Retrieve token from session storage
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//     return Promise.reject(error);
// });

export default axiosInstance;

