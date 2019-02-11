//  Third-Party Express Middleware
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

//  Dependencies
const path = require('path')
require('dotenv').config()

//  Express | Socket.io
const express = require('express')
const app = express()
const server = require('http').createServer(app)

//  Connect to MongoDB
require('./controllers/connect')

//  Routes
const getRoutes = require('./routes/get_routes')
const postRoutes = require('./routes/post_routes')

//  Middleware
//  third-party
app.use(express.json()) // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })) // to support URL-encoded bodies
app.use(morgan('tiny')) // request logger
app.use(helmet()) //  third-party middleware
app.use(cors({ credentials: true, origin: true }))
app.use((req, res, next) => {
  req.io = io
  next()
})

//  socket.io
const io = require('socket.io')(server, {
  path: '/socket/v1/drink-exchange'
})
io.on('connection', socket => {
  console.log('"Drink Exchange" - socket.io: new user connected...')
})

//  API Routing
app.use('/api/v1/drink-exchange', getRoutes)
app.use('/api/v1/drink-exchange', postRoutes)

// Serve the static files from the React app
// app.use(
//   '/static',
//   express.static(path.join(__dirname, './client/build/static'))
// )
// app.get('/favicon.ico', function(req, res) {
//   res.sendFile('favicon.ico', { root: path.join(__dirname, './client/build/') })
// })
// app.get('*', function(req, res) {
//   res.sendFile('index.html', { root: path.join(__dirname, './client/build/') })
// })

//  PORT LISTENSER
server.listen(process.env.PORT)

//  DEVELOPMENT
// require("./seed/seed")
