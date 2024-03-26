// controllers/bookingController.js
const Booking = require("../models/BookingModel");
const User = require("../models/userModel"); // Assuming you have a User model

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { serviceType, date, time, address, serviceProviderId } = req.body;
    const customer = req.user._id; // Assuming user ID is attached to the request by authentication middleware
const name = req.user.username;

    const newBooking = new Booking({
      serviceType,
      date,
      time,
      customer,
      name,
      address,
      serviceProvider: serviceProviderId,
      status: "Pending",
    });

    await newBooking.save();

    res.status(201).json({
      success: true,
      data: newBooking,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all bookings for a user
exports.getUserBookings = async (req, res) => {
  try {
    console.log("User ID from middleware:", req.user._id); // Debugging: Log the user ID

    const bookings = await Booking.find({
      $or: [{ customer: req.user._id }, { serviceProvider: req.user._id }],
    }).populate("customer serviceProvider", "username");

    console.log("Bookings found:", bookings); // Debugging: Log found bookings

    if (bookings.length === 0) {
      console.log("No bookings found for this user."); // Debugging: Log when no bookings are found
    }

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error.message); // Debugging: Log any errors
    res.status(400).json({ success: false, message: error.message });
  }
};


// Add more controller functions as needed (updateBooking, deleteBooking, etc.)

// module.exports = { createBooking, getUserBookings };
