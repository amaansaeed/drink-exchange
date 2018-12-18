const express = require("express")
const router = express.Router()

//  Controllers
const { buyDrink, sellBottle } = require("../../controllers/update")

router.post("/trade", async (req, res) => {
  const { action } = req.query
  if (action === "buy") {
    const { drink } = req.body
    buyDrink(drink)
  } else if (action === "sell") {
    const { bottle } = req.body
    sellBottle(bottle)
  }
  res.send("thanks")
})

module.exports = router
