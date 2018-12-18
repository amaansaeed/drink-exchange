//  Dependencies
const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const path = require("path")
const helmet = require("helmet")
const server = require("http").createServer(app)
const io = require("socket.io")(server)
require("dotenv").config()

//  Routes
const apiRoutesGet = require("./routes/apiRoutes/getRoutes")
const apiRoutesPost = require("./routes/apiRoutes/postRoutes")

//  Connect to MongoDB
require("./controllers/connect")

//  Middleware
app.use(express.json()) // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })) // to support URL-encoded bodies
app.use(morgan("tiny")) // request logger
app.use(helmet()) //  third-party middleware
app.use(cors())

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, "../client/build")))

//  API Routing
app.use("/api/v1", apiRoutesGet)
app.use("/api/v1", apiRoutesPost)

//  socket.io
io.on("connection", socket => {
  console.log("socket.io connected...")
  io.emit("news", { hello: "world" })
})

//  Port & Listener
app.set("port", process.env.PORT)

//  listening through socket.io and indirectly express
server.listen(app.get("port"), () => {
  console.log(`Drink-Exchange server listening on port: ${app.get("port")}`)
})

//  DEVELOPMENT
// require("./seed/seed")
