if (process.env.NODe_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const seedDB = require("./seed");
const Product = require("./models/product");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// ----------------------------- Routes ----------------------------
const productRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");

// -------------------------------- mongoose -------------------------
mongoose
    .connect("mongodb://localhost:27017/shopApp", { //process.env.DB_URL 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })

.then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("connection Failed");
        process.env.DB_URL
        console.log(err);
    });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const sessionConfig = {
    secret: "keyboardcat",
    resave: false,
    saveUninitialized: true,
};
app.use(session(sessionConfig));
app.use(flash());

// ---- initialising the passport and sessions for storing the user -----
app.use(passport.initialize());
app.use(passport.session());
// ----- cofiguring the passport to use local strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// -------

// ====================== Seeding ========================
// seedDB();

// =================== Flash message ======================
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});

// =================== Using Routes ======================
app.get("/", (req, res) => {
    res.render("landingpage/home");
});

app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);




// =============== Listening to Port ==============
app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running `);
});