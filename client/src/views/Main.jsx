import React, { Component } from "react"
import { BrowerRouter, Switch, Route } from "react-router-dom"

//  containers & components
import TickerContainer from "../containers/TickerContainer"

class Main extends Component {
  render() {
    return (
      <div>
        <TickerContainer />
      </div>
    )
  }
}

export default Main
