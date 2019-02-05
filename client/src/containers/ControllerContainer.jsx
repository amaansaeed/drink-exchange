import React, { Component } from 'react'
import http from '../services/http'
import socket from '../services/socket'
import { connect } from 'react-redux'

//  actions
import { setBottles, setDrinks, setAll, setLists } from '../actions/actions'

const Wrapper = WrappedComponent => {
  class ControllerContainer extends Component {
    state = {
      selectedDrink: '',
      selectedBottle: ''
    }

    handleClick = ({ currentTarget: e }) => {
      const { selectedDrink, selectedBottle } = this.state

      if (e.name === 'buy' && selectedDrink.length > 1) {
        http.post('/trade/buy', { drink: selectedDrink })
      } else if (e.name === 'sell' && selectedBottle.length > 1) {
        http.post('/trade/sell', { bottle: selectedBottle })
      }
    }

    selectDrink = ({ value }) => {
      this.setState({ selectedDrink: value })
    }

    selectBottle = ({ value }) => {
      this.setState({ selectedBottle: value })
    }

    componentDidMount = async () => {
      const { data } = await http.get('/master')
      const drinksList = data.drinks.map(drink => ({
        value: drink.title,
        label: drink.title
      }))
      const bottlesList = data.bottles.map(bottle => ({
        value: bottle.title,
        label: bottle.title
      }))

      // console.log({ ...data, drinksList, bottlesList })
      this.props.setLists({ drinksList, bottlesList })
      this.props.setAll({ ...data })

      socket.on('updateDrinks', data => {
        // console.log(data.drinks)
        this.props.setDrinks(data.drinks)
      })

      socket.on('updateBottles', data => {
        // console.log(data.bottles)
        this.props.setBottles(data.bottles)
      })
    }

    componentWillUnmount = () => {
      socket.close()
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          handleClick={this.handleClick}
          selectDrink={this.selectDrink}
          selectBottle={this.selectBottle}
        />
      )
    }
  }

  const mapStateToProps = state => ({
    drinks: state.drinksList,
    bottles: state.bottlesList
  })

  const mapDispatchToProps = dispatch => ({
    setDrinks: drinks => {
      dispatch(setDrinks(drinks))
    },
    setBottles: bottles => {
      dispatch(setBottles(bottles))
    },
    setAll: data => {
      dispatch(setAll(data))
    },
    setLists: lists => {
      dispatch(setLists(lists))
    }
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ControllerContainer)
}

export default Wrapper
