import React, { Component } from "react"
import http from "../services/http"

//  components
import Controller from "../components/Controller"

class ControllerContainer extends Component {
  state = {
    drinks: [],
    bottles: [],
    selectedDrink: "",
    selectedBottle: "",
    hasLoaded: false
  }

  handleClick = selection => {
    if (selection === "buy") {
      console.log(`Buy drink: ${this.state.selectedDrink}`)
    } else if (selection === "sell") {
      console.log(`Sell bottle: ${this.state.selectedBottle}`)
    }
  }

  selectDrink = ({ value }) => {
    this.setState({ selectedDrink: value })
  }

  selectBottle = ({ value }) => {
    this.setState({ selectedBottle: value })
  }

  componentDidMount = async () => {
    const response = await http({
      method: "get",
      baseURL: process.env.REACT_APP_API_ENDPOINT,
      url: "/master"
    })
    const drinks = response.data.drinks.map(drink => ({ value: drink.title, label: drink.title }))
    const bottles = response.data.bottles.map(bottle => ({
      value: bottle.title,
      label: bottle.title
    }))
    this.setState({ drinks: drinks, bottles: bottles })
    this.setState({ hasLoaded: true })
  }

  render() {
    return (
      <Controller
        {...this.state}
        handleClick={this.handleClick}
        selectDrink={this.selectDrink}
        selectBottle={this.selectBottle}
      />
    )
  }
}

export default ControllerContainer
