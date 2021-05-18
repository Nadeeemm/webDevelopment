const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.get("/",(req,res)=>{
    const {name="user"}=req.cookies
    res.send(`Hey there, Welcome Back ${name}`)
})

app.get("/setname",(req,res)=>{
    res.cookie("name","nadeem")
    res.send("cookie sent")

})

app.listen(3000,()=>{
    console.log("server is runnung")
})