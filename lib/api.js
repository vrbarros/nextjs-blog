import axios from 'axios';

const api = axios.create({});

api.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

export default api;
