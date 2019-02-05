const express = require('express')
const router = express.Router()

//  middleware
const checkHeader = require('../middleware/check_header')

//  Controllers
const { getDrinks, getBottles, getLists } = require('../controllers/request')

router.get('/drinks', checkHeader, async (req, res) => {
  const drinks = await getDrinks()
  res.json(drinks)
})

router.get('/bottles', checkHeader, async (req, res) => {
  const bottles = await getBottles()
  res.json(bottles)
})

router.get('/lists', checkHeader, async (req, res) => {
  const lists = await getLists()
  res.json(lists)
})

router.get('/master', checkHeader, async (req, res) => {
  const drinks = await getDrinks()
  const bottles = await getBottles()
  res.json({ drinks, bottles })
})

module.exports = router
