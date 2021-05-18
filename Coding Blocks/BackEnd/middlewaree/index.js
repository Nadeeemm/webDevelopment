const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.name = "myName";
  console.log(" first Middleware"); //#1

  next();
  // console.log("this is first Middleware after next ") //#4
});
app.use((req, res, next) => {
  req.name = "myName";
  console.log(" Second Middleware"); //#2

  next();
  // console.log("this is Second Middleware after next ") //#3
});

app.get("/", (req, res) => {
  res.send("this is home route");
});

app.get("/dogs", (req, res) => {
  res.send("woof woof !!");
});

// =============== Authentication ===============
const verify = (req, res, next) => {
  const { password } = req.query;
  if (password === "orange") {
    next();
  }
  res.send("INVALID USER");
};

app.get("/secret",verify, (req, res) => {
  res.send("this is my secret");
});


// ========== Server is Running ==========
app.listen(3000, () => {
  console.log("server is running at 3000");
});
