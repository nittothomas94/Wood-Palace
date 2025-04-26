import axios from 'axios';

const instence = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
});

export default instence;
