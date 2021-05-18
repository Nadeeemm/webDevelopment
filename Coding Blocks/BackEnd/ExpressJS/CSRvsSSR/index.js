const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const todos = ["go to gym", "go to market", "play football"];

app.get("/todo", (req, res) => {
  if (req.xhr) {
    console.log("AJAX REQUEST");
    res.send(todos);
  } else {
    console.log("SSR");
    res.render("home", { todos });
  }
});

app.post("/todo", (req, res) => {
  // console.log(req.body);

  const { todo } = req.body;
  todos.push(todo);
  res.redirect("/todo");
});

app.listen(3000, () => {
  console.log("server is running");
});
