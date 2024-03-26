// routes/bookingRoutes.js
const express = require('express');
const { createBooking, getUserBookings } = require('../controllers/bookingController');
const { isAuthenticated } = require('../middleware/auth'); // Assuming you have authentication middleware

const router = express.Router();

router.post('/bookings', isAuthenticated, createBooking);
router.get('/bookings', isAuthenticated, getUserBookings);

module.exports = router;
