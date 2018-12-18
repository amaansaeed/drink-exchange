import React, { Component, Fragment } from "react"
import styled from "styled-components"

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

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Wrapper>
          <Drinks />
          <Bottles />
          <Controller />
        </Wrapper>
      </Fragment>
    )
  }
}

export default Dashboard
