import io from 'socket.io-client'

//  env variables
const endpoint = process.env.REACT_APP_SOCKETIO_ENDPOINT
const path = process.env.REACT_APP_SOCKETIO_PATH + '/socket.io'

export default io(endpoint, {
  path: path
})
