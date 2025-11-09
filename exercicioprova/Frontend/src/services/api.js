import axios from 'axios';

// Configuração da instância do Axios com URL base da API
const api = axios.create({
  baseURL: 'http://localhost:3000' // URL da API backend.
});

export default api;