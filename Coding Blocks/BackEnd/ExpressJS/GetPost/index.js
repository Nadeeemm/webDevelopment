const express = require("express");
const app = express();

app.set("view engine", "ejs");

// we are using this (app.use) as a midleware to parse the data(req.body)
app.use(express.urlencoded({ extended: true }));

// for parsing application/Json :
app.use(express.json());

app.get("/", (req, res) => {
  //  res.send("it is working")
  res.render("form");
});

app.get("/user", (req, res) => {
  const { username } = req.query;
  res.send(`Form Submitted from ${username}`);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("post request");
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});



