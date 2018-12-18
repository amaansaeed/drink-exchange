import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

//  views
import Dashboard from "./views/Dashboard"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
