const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
// const seedDB = require("./seed");
const Product = require("./models/product");
const productRoutes = require("./routes/product");
// -----------------------------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// =============== DataBase ===============

mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("connection Failed");
    console.log(err);
  });



// ========== seeding the products by calling seedDB, ==============
//   seedDB();


// ================ Using our Routes ==================
app.use(productRoutes);


// =============== Listening to Port ==============
app.listen(3000, () => {
  console.log("server is running");
});
