import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.cheeck.com.br/cheeck_api', // exemplo de endereco do server
});

export default api;
