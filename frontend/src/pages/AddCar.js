import React, { useState } from 'react';
import axios from '../services/axiosConfig';
import { useNavigate } from 'react-router-dom';

const AddCar = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/cars',
        { title, description },
        { headers: { Authorization: token } }
      );
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Failed to add car');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add New Car</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Add Car</button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
