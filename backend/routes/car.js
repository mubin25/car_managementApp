const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  const newCar = new Car({ ...req.body, userId: req.user.id });
  await newCar.save();
  res.json(newCar);
});

router.get('/', auth, async (req, res) => {
  const cars = await Car.find({ userId: req.user.id });
  res.json(cars);
});

module.exports = router;
