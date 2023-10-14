import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1'; // Replace with your API base URL

const apiClient  = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    "Authorization": "bearer"
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle errors here
    throw error;
  }
);

export default apiClient;