import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../services/axiosConfig';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/cars/${id}`, {
          headers: { Authorization: token }
        });
        setCar(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCarDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/cars/${id}`, {
        headers: { Authorization: token }
      });
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Failed to delete car');
    }
  };

  if (!car) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{car.title}</h2>
      <p>{car.description}</p>
      <button onClick={handleDelete}>Delete Car</button>
      <button onClick={() => navigate(`/edit-car/${id}`)}>Edit Car</button>
    </div>
  );
};

export default CarDetails;
