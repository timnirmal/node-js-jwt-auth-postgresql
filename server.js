const express = require("express")
const BodyPharser = require("body-parser")
const cors = require("cors")

const app = express()

var corsOptions = {
  origin: "http://localhost:8081",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(BodyPharser.json())
// parse application/x-www-form-urlencoded
app.use(BodyPharser.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

