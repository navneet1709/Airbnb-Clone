const express = require("express");

const bookRouter = express.Router();

const {bookHouse} = require("../controllers/booking");

bookRouter.get("/listings/:id/book",bookHouse)


module.exports  = bookRouter;