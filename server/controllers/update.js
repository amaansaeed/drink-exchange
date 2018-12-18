//  models
const Drinks = require("../models/drinks")
const Bottles = require("../models/bottles")

const sellBottle = () => {
  return new Promise(resolve => {
    resolve()
  })
}

const buyDrink = () => {
  return new Promise(resolve => {
    resolve()
  })
}

module.exports = {
  sellBottle: sellBottle,
  buyDrink: buyDrink
}
