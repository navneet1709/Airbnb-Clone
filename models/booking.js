
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  guests: {
    type: Number,
    required: true,
    min: 1,
    max: 20
  },
  checkin: {
    type: Date,
    required: true
  },
  checkout: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    enum: ['vacation', 'business', 'family', 'other'],
    required: true
  },
  requests: {
    type: String
  },
  arrival: {
    type: String // Store as string in HH:MM format
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  listingId: {
    type: String,
    required: true
  },
  House_title: {
    type: String
  },
  House_price: {
    type: Number
  },
  House_location: {
    type: String
  },
  House_country: {
    type: String
  },
  totalAmount: {
    type: Number
  },
  totalAfterTax: {
    type: Number
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
