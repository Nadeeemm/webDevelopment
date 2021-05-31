const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

// -------------------- create Registeration Form ------------------

router.get("/register", async (req, res) => {
  res.render("auth/signup");
});

// -------------------- Registeration new User ------------------
router.post("/register", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
    });
    const newUser = await User.register(user, req.body.password);
    req.flash("success", "Registered Successfully");
    res.redirect("/login");
    // console.log(newUser);
  } catch (e) {
    console.log(e);
    req.flash("error", e.message);
    res.redirect("/register");
  }
});

// -------------------- Login Form ------------------

router.get("/login", async (req, res) => {
  res.render("auth/login");
});

// -------------------- Login User ------------------
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", `Good to see you agian  ${req.user.username}`);
    res.redirect("/products");
    // console.log("user Info",req.user)
    // console.log("Username:",req.user.username)
  }
);

// -------------------- Log-out User ------------------
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success", "logged out successfully");
  res.redirect("/login");
});

// -----------------------------------------------------
module.exports = router;
