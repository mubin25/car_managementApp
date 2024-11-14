import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import CarList from './pages/CarList';
import AddCar from './pages/AddCar';
import CarDetails from './pages/CarDetails';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <CarList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-car"
            element={
              <ProtectedRoute>
                <AddCar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cars/:id"
            element={
              <ProtectedRoute>
                <CarDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
