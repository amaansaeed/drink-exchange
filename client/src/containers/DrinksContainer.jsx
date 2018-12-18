import React, { Component } from "react"
import http from "../services/http"

//  components
import Drinks from "../components/Drinks"

class DrinksContainer extends Component {
  state = {
    hasLoaded: false,
    drinks: []
  }
  componentDidMount = async () => {
    const response = await http({
      method: "get",
      baseURL: process.env.REACT_APP_API_ENDPOINT,
      url: "/drinks"
    })
    this.setState({ drinks: response.data })
    this.setState({ hasLoaded: true })
  }
  render() {
    return <Drinks {...this.state} />
  }
}

export default DrinksContainer
