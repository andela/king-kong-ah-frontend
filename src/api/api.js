import axios from 'axios';
<<<<<<< HEAD
import baseUrl from '../constants/constants';

=======

const baseUrl = 'https://king-kong-ah-backend-staging.herokuapp.com/api/v1';
>>>>>>> chore(api): create usedatafromapi hook
const api = axios.create({
  baseURL: baseUrl,
});

export default api;
