// routes/index.js
const express = require("express")
const Booking = require("../models/Booking")
const router = express.Router()

// Home route
router.get("/", (req, res) => {
  res.render("index")
})

// Booking route
router.post("/book", async (req, res) => {
  const { name, date, service, contact } = req.body
  try {
    const newBooking = new Booking({ name, date, service, contact })
    await newBooking.save()
    res.send("Booking confirmed!")
  } catch (err) {
    res.status(500).send("Error booking the appointment")
  }
})

// Get all bookings
router.get("/appointments", async (req, res) => {
  try {
    const bookings = await Booking.find()
    res.render("appointments", { bookings })
  } catch (err) {
    res.status(500).send("Error retrieving appointments")
  }
})

module.exports = router
