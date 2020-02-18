import axios from 'axios';
import cookie from 'js-cookie';
console.log(process.env)
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: process.env.BACKEND_BASE_URL || "http://localhost:3000",
});
// Where you would set stuff like your 'Authorization' header, etc ...
const token = cookie.get('token');
if (token) instance.defaults.headers.common.Authorization = `Bearer ${token}`;

// Add a request interceptor
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use((response) => {
  // Do something with response data
  return response;
}, (error) => {
  // Do something with response error
  return Promise.reject(error);
});

export default instance;