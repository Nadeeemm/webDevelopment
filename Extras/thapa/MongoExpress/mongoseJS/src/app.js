const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/nadeem", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection Sucessfull"))
  .catch((err) => console.log(err))
