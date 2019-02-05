const mongoose = require("mongoose")

//  Connect to Database
mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to database...")
  })
