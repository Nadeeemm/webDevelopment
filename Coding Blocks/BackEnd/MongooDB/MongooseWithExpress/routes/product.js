const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// ================= Display all the Products =================
router.get("/products", async (req, res) => {
  const products = await Product.find({});

  res.render("index", { products });
});

// ================ Form to create new Product ===============

router.get("/products/new", (req, res) => {
  res.render("new");
});

// ============ Create new Product ==============
router.post("/products", async (req, res) => {
  const productBody = req.body;
  await Product.create(productBody);
  res.redirect("/products");
});

// ============ Show a Product =============
router.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("show", { product });
});

// ============== Edit a Product ============
router.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  //  console.log(":::@@",product)
  res.render("edit", { product });
});

router.patch("/products/:id", async (req, res) => {
  // res.send('you hit the patch route')
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/products/${req.params.id}`);
});

// =============== Delete Product ==============

router.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect(`/products`);
});

module.exports = router;
