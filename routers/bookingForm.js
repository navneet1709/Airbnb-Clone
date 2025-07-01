const express = require("express");

const bookingFormRouter = express.Router();

const {bookHouseForm} = require("../controllers/bookingForm");

bookingFormRouter.get("/form/:id/book",bookHouseForm)


module.exports  = bookingFormRouter;