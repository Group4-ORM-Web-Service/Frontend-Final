import axios from 'axios';
import config from '../constant/config';
import { STORAGE_KEY } from '../constant/keyComponent';

const apiClient = axios.create({
  baseURL: config.apiBaseUrl, // Replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adding Authorization token dynamically
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEY.USER_TOKEN); // or use any other storage method
    console.log('hello token', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log('apiClient.interceptors.request', error);
    return Promise.reject(error);
  },
);

export default apiClient;
