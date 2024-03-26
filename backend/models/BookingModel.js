// models/BookingModel.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    serviceType: String,
    date: Date,
    address: String,
    time: {
        type: String,
        required: true

    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    serviceProvider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
