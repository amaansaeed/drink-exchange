import React, { Component } from 'react'
import styled from 'styled-components'

//  components
import Header from './components/Header'
import Drinks from './components/Drinks'
import Bottles from './components/Bottles'
import Controller from './components/Controller'

//  styled components
const Dashboard = styled.div``

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

const Content = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto;
`

class App extends Component {
  state = {}

  render() {
    return (
      <Dashboard>
        <Header />
        <Introduction>
          <div>
            <p>
              Welcome to the 'Drink Exchange' - a bar (simulation) where you'll
              never pay the same price for a drink, probably. Based on a stock
              exchange the price any drink varies on how many of each drink the
              bar has sold so far along with however many bottles of alcohol
              they've bought.
            </p>
            <Alert>Re-Development Phase - Simulation coming soon!</Alert>
          </div>
        </Introduction>
        <Content>
          <Drinks />
          <Bottles />
          <Controller />
        </Content>
      </Dashboard>
    )
  }
}

export default App
