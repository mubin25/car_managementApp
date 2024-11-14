import React, { useEffect, useState } from 'react';
import carService from '../services/carService';
import CarCard from '../Components/CarCard';

import { Link, useNavigate } from 'react-router-dom';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await carService.getCars();
        setCars(carsData);
      } catch (err) {
        console.error(err);
        if (err.response && err.response.status === 401) navigate('/login');
      }
    };
    fetchCars();
  }, [navigate]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Your Cars</h2>
        <Link to="/add-car" className="btn btn-primary">Add New Car</Link>
      </div>
      <div className="row">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
