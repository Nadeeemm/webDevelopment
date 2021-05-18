const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const seedDB = require("./seed");
const blogRoutes = require("./routes/blog");
const Blog = require("./models/blog");
const methodOverride = require('method-override')


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


mongoose
  .connect("mongodb://localhost:27017/blogs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("connection Failed");
    console.log(err);
  });

// ====================== Seeding ========================
// seedDB();

// ================= Using Routes ===================
app.use(blogRoutes);

app.get("/", (req, res) => {
  res.send(" Connected");
});

app.listen(5000, () => {
  console.log("server is running");
});
