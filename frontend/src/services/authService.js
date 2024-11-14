import axios from './axiosConfig';

const authService = {
  register: async (userData) => {
    const response = await axios.post('/users/register', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await axios.post('/users/login', credentials);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: () => {
    return localStorage.getItem('token');
  },
};

export default authService;
