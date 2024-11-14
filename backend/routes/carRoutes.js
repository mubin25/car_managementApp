const express = require('express');
const {
  addCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
} = require('../controllers/carController');

const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware'); // For handling file uploads

const router = express.Router();

router.post('/', authMiddleware, upload.array('images', 10), addCar);
router.get('/', authMiddleware, getCars);
router.get('/:id', authMiddleware, getCarById);
router.put('/:id', authMiddleware, upload.array('images', 10), updateCar);
router.delete('/:id', authMiddleware, deleteCar);

module.exports = router;
