import axios from 'axios';

const baseUrl = 'https://king-kong-ah-backend-staging.herokuapp.com/api/v1';
const api = axios.create({
  baseURL: baseUrl,
});

export default api;
