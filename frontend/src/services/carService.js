import axios from './axiosConfig';

const carService = {
  getCars: async () => {
    const response = await axios.get('/cars');
    return response.data;
  },

  getCarById: async (id) => {
    const response = await axios.get(`/cars/${id}`);
    return response.data;
  },

  addCar: async (carData) => {
    const response = await axios.post('/cars', carData);
    return response.data;
  },

  updateCar: async (id, carData) => {
    const response = await axios.put(`/cars/${id}`, carData);
    return response.data;
  },

  deleteCar: async (id) => {
    const response = await axios.delete(`/cars/${id}`);
    return response.data;
  },
};

export default carService;
