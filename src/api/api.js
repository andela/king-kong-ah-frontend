import axios from 'axios';
import baseUrl from '../constants/constants';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
