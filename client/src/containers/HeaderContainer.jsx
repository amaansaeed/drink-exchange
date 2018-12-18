import React, { Component } from "react"

//  components
import Header from "../components/Header"

class HeaderContainer extends Component {
  state = {}
  render() {
    return <Header {...this.state} />
  }
}

export default HeaderContainer
