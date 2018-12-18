//  models
const Drinks = require("../models/drinks")
const Bottles = require("../models/bottles")

const getDrinks = () => {
  return new Promise(resolve => {
    Drinks.find().exec((err, drinks) => {
      if (err) throw err
      resolve(drinks)
    })
  })
}

const getBottles = () => {
  return new Promise(resolve => {
    Bottles.find().exec((err, bottles) => {
      if (err) throw err
      resolve(bottles)
    })
  })
}

const getDrinksLists = () => {
  return new Promise(resolve => {
    Drinks.find()
      .select("title")
      .exec((err, drinks) => {
        if (err) throw err
        resolve(drinks)
      })
  })
}

const getBottlesLists = () => {
  return new Promise(resolve => {
    Bottles.find()
      .select("title")
      .exec((err, bottles) => {
        if (err) throw err
        resolve(bottles)
      })
  })
}

const getLists = () => {
  return new Promise(async resolve => {
    const drinks = await getDrinksLists()
    const bottles = await getBottlesLists()

    resolve({ bottles: bottles, drinks: drinks })
  })
}

module.exports = {
  getDrinks: getDrinks,
  getBottles: getBottles,
  getLists: getLists
}
