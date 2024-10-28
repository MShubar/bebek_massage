const express = require("express")
const app = express()
const path = require("path")

// Static Files
app.use(express.static(path.join(__dirname, "public")))

// Set EJS as the templating engine
app.set("view engine", "ejs")

// Routes
app.get("/", (req, res) => {
  res.render("home")
})

app.get("/services", (req, res) => {
  res.render("services")
})

app.get("/contact", (req, res) => {
  res.render("contact")
})

// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})
