const express = require("express");
const app = express();
const path = require("path");

// console.log(path.join(__dirname,'/public'));

// const staticPath = path.join(__dirname, "/public");

// app.use(express.static(staticPath))


app.get("/", (req, res) => {
  res.send("Welcome to my Home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

// app.get("/contact", (req, res) => {
//   res.send("Welcome to contact Page");
// });

// app.get("/temp", (req, res) => {
//   res.send("Welcome to my Temperature Page");
// });

// app.get("/demo", (req, res) => {
//   res.send({
//     id:1,
//     name: "demo",
//     age: 23,
//   })

// });

app.listen(4000, () => {
  // console.log("port is listening at 8000");
});
