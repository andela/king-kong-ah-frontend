import axios from 'axios';
import baseUrl from '../constants/constants';

const api = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});

export default api;
