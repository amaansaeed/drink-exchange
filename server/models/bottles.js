const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

const Model = mongoose.model("Bottles", schema)

module.exports = Model
