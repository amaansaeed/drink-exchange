//  Dependencies
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const path = require("path")
const helmet = require("helmet")
require("dotenv").config()

//  Routes
const apiRoutes = require("./routes/apiRoutes")

//  Connect to MongoDB
require("./controllers/connect")

//  Express
const app = express()

//  Middleware
app.use(express.json()) // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })) // to support URL-encoded bodies
app.use(morgan("tiny")) // request logger
app.use(helmet()) //  third-party middleware
app.use(cors())

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, "../client/build")))

//  API Routing
app.use("/api/v1", apiRoutes)

//  Port & Listener
app.set("port", process.env.PORT)

app.listen(app.get("port"), () =>
  console.log(`Drink-Exchange server listening on port: ${app.get("port")}`)
)

//  DEVELOPMENT
// require("./seed/seed")
