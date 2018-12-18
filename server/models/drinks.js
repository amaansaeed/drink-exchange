const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sold: {
    type: Number,
    required: true
  },
  alcohol: [
    {
      title: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ]
})

const Model = mongoose.model("Drinks", schema)

module.exports = Model
