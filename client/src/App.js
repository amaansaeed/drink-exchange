import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

//  views
import Main from "./views/Main"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
