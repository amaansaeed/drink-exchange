import React, { Component } from 'react'
import {connect} from "react-redux"

const Wrapper = WrappedComponent => {
  class BottlesContainer extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    bottles: state.bottles
  })

  return connect(mapStateToProps)(BottlesContainer)
}

export default Wrapper
