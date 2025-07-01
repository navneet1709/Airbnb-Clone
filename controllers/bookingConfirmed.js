const Booking = require('../models/booking');

module.exports.createBooking = async (req, res) => {
  try {
    const bookingData = req.body;
    // Calculate total amount and total after tax
    const nights = parseInt(bookingData.nights, 10) || 1;
    const price = parseFloat(bookingData.House_price) || 0;
    const totalAmount = nights * price;
    const totalAfterTax = +(totalAmount * 1.18).toFixed(2);
    bookingData.totalAmount = totalAmount;
    bookingData.totalAfterTax = totalAfterTax;
    // Save booking
    const booking = new Booking(bookingData);
    await booking.save();
    res.render('listings/bookingConfirmed', {
      ...bookingData,
      totalAmount,
      totalAfterTax,
      confirmationMessage: 'Your booking is <span class="highlight">confirmed</span>! <br> <span class="thanks">Thank you for choosing <b>NestHaven</b>.</span>'
    });
  } catch (error) {
    console.error('Error confirming booking:', error);
    res.status(500).send('Error confirming booking');
  }
};
