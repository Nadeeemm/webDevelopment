const express = require("express");
const app = express();
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");
uuid();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("server is running");
});

let comments = [
  {
    id: uuid(),
    username: "cat",
    body: "meow meow meow",
  },
  {
    id: uuid(),
    username: "dog",
    body: "woof woof",
  },
  {
    id: uuid(),
    username: "kartik",
    body: "this is my comment",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

// ------- Add new comment form---------

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

// -------- creating new comment --------

app.post("/comments", (req, res) => {
  const { username, body } = req.body;
  comments.push({ username, body, id: uuid() });
  res.redirect("/comments");
});

//------- show perticular comment --------

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment: foundComment });

  res.send(foundComment);
});

// ---------- form to edit comment ----------

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find(c => c.id === id);
  res.render("comments/edit", { comment: foundComment });
});

// --------- update Comment ---------
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find(c => c.id === id);
  const updatedCommentText = req.body.body;
  // here.body(it's the body text of comment)
  foundComment.body = updatedCommentText;
  res.redirect("/comments");
});

// ---------- Delete Comment ----------
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  const temp = comments.filter(c => c.id !== id);
  comments = temp;
  res.redirect ("/comments");
});

app.listen({ port }),
  () => {
    console.log(`server is running at ${port}`);
  };
