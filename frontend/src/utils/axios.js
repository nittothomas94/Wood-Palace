import axios from 'axios';

const instence = axios.create({
  baseURL: 'https://wood-palace.onrender.com/api',
  timeout: 10000,
});

export default instence;
