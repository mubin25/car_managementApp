const Car = require('../models/Car'); // Assuming you have a Car model

// Add a new car
exports.addCar = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const images = req.files.map((file) => file.path); // Handling multiple images upload

    const car = new Car({
      title,
      description,
      tags,
      images,
      user: req.user.userId, // Assuming you have user authentication middleware
    });

    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all cars for a user
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find({ user: req.user.userId });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update car details
exports.updateCar = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    // Update car details
    car.title = title || car.title;
    car.description = description || car.description;
    car.tags = tags || car.tags;

    if (req.files && req.files.length > 0) {
      car.images = req.files.map((file) => file.path);
    }

    await car.save();
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a car
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    await car.deleteOne();
    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
