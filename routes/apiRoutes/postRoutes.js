const express = require("express")
const router = express.Router()

//  Controllers
const { buyDrink, sellBottle } = require("../../controllers/update")
const { getDrinks, getBottles } = require("../../controllers/request")

router.post("/trade", async (req, res) => {
  const { action } = req.query
  if (action === "buy") {
    const { drink } = req.body
    await buyDrink(drink)
  } else if (action === "sell") {
    const { bottle } = req.body
    await sellBottle(bottle)
  }
  const drinks = await getDrinks()
  const bottles = await getBottles()
  req.io.sockets.emit("updateDrinks", { drinks: drinks })
  req.io.sockets.emit("updateBottles", { bottles: bottles })
  res.send(true)
})

module.exports = router
