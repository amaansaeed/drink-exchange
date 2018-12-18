//  models
const Drinks = require("../models/drinks")
const Bottles = require("../models/bottles")

const sellBottle = bottle => {
  return new Promise(resolve => {
    Bottles.findOne({ title: bottle }, (err, res) => {
      if (err) throw err
      Bottles.findOneAndUpdate({ title: bottle }, { stock: res.stock + 1 }, (err, res) => {
        resolve()
      })
    })
  })
}

const buyDrink = drink => {
  return new Promise(resolve => {
    Drinks.findOne({ title: drink }, (err, res) => {
      if (err) throw err
      Drinks.findOneAndUpdate({ title: drink }, { sold: res.sold + 1 }, (err, res) => {
        resolve()
      })
    })
  })
}

module.exports = {
  sellBottle: sellBottle,
  buyDrink: buyDrink
}
