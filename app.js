//  Dependencies
const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

//  Socket.io
const server = require('http').createServer(app)
const io = require('socket.io')(server)

//  Third-Party Express Middleware
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

//  Routes
const getRoutes = require('./routes/get_routes')
const postRoutes = require('./routes/post_routes')

//  Connect to MongoDB
require('./controllers/connect')

//  socket.io
io.on('connection', socket => {
  console.log('socket.io: new user connected...')
  // io.emit('news', { hello: 'world' })
})

//  Middleware
//  third-party
app.use(express.json()) // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })) // to support URL-encoded bodies
app.use(morgan('tiny')) // request logger
app.use(helmet()) //  third-party middleware
app.use(cors())
app.use((req, res, next) => {
  req.io = io
  next()
})

//  API Routing
app.use('/api/v1', getRoutes)
app.use('/api/v1', postRoutes)

// Serve the static files from the React app
app.use(
  '/static',
  express.static(path.join(__dirname, './client/build/static'))
)
app.get('*', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './client/build/') })
})

//  Port & Listener
app.set('port', process.env.PORT)

//  listening through socket.io and indirectly express
server.listen(app.get('port'), () => {
  console.log(`Drink-Exchange server listening on port: ${app.get('port')}`)
})

//  DEVELOPMENT
// require("./seed/seed")
