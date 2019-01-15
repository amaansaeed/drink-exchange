import io from "socket.io-client"

//  env variables
const endpoint = process.env.REACT_APP_SOCKETIO_ENDPOINT

export default io(endpoint)
