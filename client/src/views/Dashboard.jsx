import React, { Component, Fragment } from "react"
import styled from "styled-components"
import io from "socket.io-client"

//  containers & components
import Header from "../containers/HeaderContainer"
import Drinks from "../containers/DrinksContainer"
import Bottles from "../containers/BottlesContainer"
import Controller from "../containers/ControllerContainer"

//  styled-components
const Wrapper = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto;
`

//  env variables
const endpoint = process.env.REACT_APP_SOCKETIO_ENDPOINT

class Dashboard extends Component {
  state = {}

  componentDidMount = () => {
    this.setState({ socket: io(endpoint) })
  }

  componentWillUnmount = () => {
    this.state.socket.close()
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Wrapper>
          <Drinks socket={this.state.socket} />
          <Bottles socket={this.state.socket} />
          <Controller />
        </Wrapper>
      </Fragment>
    )
  }
}

export default Dashboard
