const express = require("express")
const router = express.Router()

//  Controllers
const { getDrinks, getBottles, getLists } = require("../controllers/request")

router.get("/drinks", async (req, res) => {
  const drinks = await getDrinks()
  res.json(drinks)
})

router.get("/bottles", async (req, res) => {
  const bottles = await getBottles()
  res.json(bottles)
})

router.get("/master", async (req, res) => {
  const lists = await getLists()
  res.json(lists)
})

module.exports = router
