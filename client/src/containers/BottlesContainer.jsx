import React, { Component } from "react"
import http from "../services/http"

//  components
import Bottles from "../components/Bottles"

class BottlesContainer extends Component {
  state = {
    hasLoaded: false,
    bottles: []
  }
  componentDidMount = async () => {
    const response = await http({
      method: "get",
      baseURL: process.env.REACT_APP_API_ENDPOINT,
      url: "/bottles"
    })
    this.setState({ bottles: response.data })
    this.setState({ hasLoaded: true })
  }
  render() {
    return <Bottles {...this.state} />
  }
}

export default BottlesContainer
