import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100">
        <div className="card-body">
          <h5 className="card-title">{car.title}</h5>
          <p className="card-text">{car.description.substring(0, 100)}...</p>
          <Link to={`/cars/${car._id}`} className="btn btn-info">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
