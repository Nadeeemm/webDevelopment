const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Review = require("../models/review");
const { isLoggedIn } = require("../middleware");

// =========== Display All Products ==============
router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

// =========== new product form ================
router.get("/products/new", isLoggedIn, (req, res) => {
  res.render("products/new");
});

// ============== create new product ===============
router.post("/products", isLoggedIn, async (req, res) => {
  try {
    await Product.create(req.body.product);
    req.flash("success", "New product created Successfully");
    res.redirect("/products");
  } catch (e) {
    // console.log(e.message);
    req.flash("error", "cannot create product");
    res.redirect("/error");
  }
});

//  ================= show Product ============
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("reviews");
    res.render("products/show", { product });
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot show product");
    res.redirect("/error");
  }
});

// ========== Edit And Update Product  =============
router.get("/products/:id/edit", isLoggedIn, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render("products/edit", { product });
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot edit product");
    res.redirect("/error");
  }
});

router.patch("/products/:id", isLoggedIn, async (req, res) => {
  // const { id } = req.params.id;
  await Product.findByIdAndUpdate(req.params.id, req.body.product);
  req.flash("success", "Product edited Successfully");
  res.redirect(`/products/${req.params.id}`);
});

// =============== Delete a Product ================
router.delete("/products/:id", isLoggedIn, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    req.flash("success", "Product deleted Successfully");
    res.redirect("/products");
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot show product");
    res.redirect("/error");
  }
});

// ------------------------------------------------------------------------------------------------------

// ========== Create new comment ============
router.post("/products/:id/review", isLoggedIn, async (req, res) => {
  const product = await Product.findById(req.params.id);

  const review = new Review({
    user: req.user.username,
    ...req.body,
  });
  product.reviews.push(review);
  await review.save();
  await product.save();
  req.flash("success", "Review added Successfully");
  res.redirect(`/products/${req.params.id}`);
});

router.get("/error", (req, res) => {
  res.status(500).render("error");
});

module.exports = router;
