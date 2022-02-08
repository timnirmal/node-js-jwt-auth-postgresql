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





/*** @Production Code
 const db = require("./app/models");
 db.sequelize.sync();
 */

/** @Development Code
 *
 */
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
  //process.exit(0);
  initial();
});

// Set these in database everytime you run the server
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}




// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" })
})

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

