import React, { Component } from 'react'
import { connect } from 'react-redux'

const Wrapper = WrappedComponent => {
  class DrinksContainer extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  
  const mapStateToProps = state => ({
    drinks: state.drinks
  })

  return connect(mapStateToProps)(DrinksContainer)
}

export default Wrapper
