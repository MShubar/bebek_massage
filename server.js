// server.js
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bookingRoutes = require("./routes/index")

dotenv.config()
const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Routes
app.use("/", bookingRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
