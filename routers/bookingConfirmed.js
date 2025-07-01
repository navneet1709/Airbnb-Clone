const express = require("express");

const bookRouter = express.Router();

const {createBooking} = require("../controllers/bookingConfirmed");

bookRouter.post("/postBooking",createBooking)


module.exports  = bookRouter;