//  models
const Drinks = require("../models/drinks")
const Bottles = require("../models/bottles")

//  seed data
const drinksData = require("./drinks.json")
const bottlesData = require("./bottles.json")

seedData = async () => {
  const drinks = await Drinks.insertMany(drinksData)
  console.log("seeding: drinks seeded...")
  const bottles = await Bottles.insertMany(bottlesData)
  console.log("seeding: bottles seeded...")
  console.log("seeding: complete...")
}

setTimeout(() => {
  console.log("seeding data...")
  seedData()
}, 1 * 1000)
