// models/Booking.js
const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  service: { type: String, required: true },
  contact: { type: String, required: true },
})

module.exports = mongoose.model("Booking", bookingSchema)
