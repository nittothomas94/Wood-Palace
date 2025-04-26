import axios from 'axios';

const instence = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

export default instence;
