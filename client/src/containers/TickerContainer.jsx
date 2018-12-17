import React, { Component } from "react"

//  data
import drinks from "../data/drinks"

//  components
import Ticker from "../components/Ticker"

class TickerContainer extends Component {
  state = {
    hasLoaded: false,
    drinks: []
  }
  componentDidMount = () => {
    this.setState({ drinks: drinks })
    this.setState({ hasLoaded: true })
  }
  render() {
    return <Ticker {...this.state} />
  }
}

export default TickerContainer
