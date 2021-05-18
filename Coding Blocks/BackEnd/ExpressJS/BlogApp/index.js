const express = require("express");
const app = express();
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ========== Creating Blogs Array ==========

let blogsArray = [
  {
    id: uuid(),
    image:
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Tortoise",
    desc: `Some quick example text to build on the card title and make up the
    bulk of the card's content`,
  },
  {
    id: uuid(),
    image:
      "https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "ButterFly",
    desc: `Some quick example text to build on the card title and make up the
    bulk of the card's content`,
  },
  {
    id: uuid(),
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "wolf",
    desc: `Some quick example text to build on the card title and make up the
    bulk of the card's content`,
  },
];

app.get("/", (req, res) => {
  res.send("server is running");
});

// ========== List of blogs ==========

app.get("/blogs", (req, res) => {
  res.render("blogs/home", { blogsArray });
});

//========== Add a  new blog form ==========
app.get("/blogs/new", (req, res) => {
  res.render("blogs/new");
});

// ========= Creating a new blog ==========

app.post("/blogs", (req, res) => {
  const { image, title, desc } = req.body;
  blogsArray.push({ id: uuid(), image, title, desc });
  res.redirect("/blogs");
});

//========== show  a particular blog ==========
app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const foundBlog = blogsArray.find((b) => b.id == id);
  res.render("blogs/show", { blog: foundBlog });
});

// ========== edit blog form ==========
app.get("/blogs/:id/edit", (req, res) => {
  const { id } = req.params;
  const foundBlog = blogsArray.find((b) => b.id === id);
  res.render("blogs/edit", { blog: foundBlog });
});

// ========== Update Blog ==========
app.patch("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const foundBlog = blogsArray.find((b) => b.id === id);
  const updatedDescText = req.body.desc;
  foundBlog.desc = updatedDescText;
  res.redirect("/blogs");
});

// ========== Delete blog ==========

app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const tempArray = blogsArray.filter((b) => b.id !== id);
  blogsArray = tempArray;
  res.redirect("/blogs");
});



app.listen(4000),
  () => {
    console.log("server is running ")
  };

