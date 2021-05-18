const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 5000;
const {calculateFare} = require("./fareUtils");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.post("/calfare", (req, res) => {
  const km = req.body.km;
  const min = req.body.min;
  let fare = calculateFare(km, min);

  res.send({ totalFare: fare });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
