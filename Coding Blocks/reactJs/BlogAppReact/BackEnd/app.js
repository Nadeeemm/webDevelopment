const express = require("express")
const app = express();
const mongoose = require("mongoose")
const seedDB = require("./seed")


// Routes ======>

const blogRoutes = require("./routes/blog")






mongoose.connect('mongodb://localhost:27017/rc-blog-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("DB Conneccted")
    }).catch((err) => {
        console.log("Db not connected")
        console.log(err)
    })





// seedDB();

app.use(blogRoutes)

app.listen(8080, () => {
    console.log("Server is running")
})