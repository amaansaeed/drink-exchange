const express = require('express')
const router = express.Router()

//  middleware
const checkHeader = require('../middleware/check_header')

//  Controllers
const { buyDrink, sellBottle } = require('../controllers/update')
const { getDrinks, getBottles } = require('../controllers/request')

router.post('/trade/buy', checkHeader, async (req, res) => {
  // console.log(req.body.drink)
  await buyDrink(req.body.drink)
  const drinks = await getDrinks()
  req.io.sockets.emit('updateDrinks', { drinks })
  res.send(true)
})

router.post('/trade/sell', checkHeader, async (req, res) => {
  // console.log(req.body.bottle)
  await sellBottle(req.body.bottle)
  const bottles = await getBottles()
  req.io.sockets.emit('updateBottles', { bottles })
  res.send(true)
})

module.exports = router
