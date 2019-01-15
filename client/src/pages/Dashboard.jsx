import React, { Component, Fragment } from "react"
import styled from "styled-components"
import socket from "../services/socket"
// import io from "socket.io-client"

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

const Introduction = styled.div`
  width: 100vw;

  & > div {
    width: 70%;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  }

  & p {
    line-height: 1.7em;
  }
`

const Alert = styled.div`
  text-align: center;
  color: red;
  font-weight: 300;
  font-size: 14px;
`

class Dashboard extends Component {
  state = {}

  componentDidMount = () => {
    this.setState({ socket: socket })
  }

  componentWillUnmount = () => {
    this.state.socket.close()
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Introduction>
          <div>
            <p>
              Welcome to the 'Drink Exchange' - a bar (simulation) where you'll never pay the same
              price for a drink, probably. Based on a stock exchange the price any drink varies on
              how many of each drink the bar has sold so far along with however many bottles of
              alcohol they've bought.
            </p>
            <Alert>Re-Development Phase - Simulation coming soon!</Alert>
          </div>
        </Introduction>
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
