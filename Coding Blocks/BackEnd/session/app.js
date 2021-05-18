const express = require("express");
const app = express();
const session = require("express-session");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/view",(req,res)=>{
    if(req.session.view){
        req.session.view+=1;
    }else{
        req.session.view=1;
    }
    res.send(`page count: ${req.session.view}`)
})

app.get("/register",(req,res)=>{
    const {username} = req.query;
    req.session.username = username;
    res.redirect('/greet')
})
app.get("/greet",(req,res)=>{
    const{username = "user"}= req.session
    res.send(`hello from ${username}`)
})

app.listen(3030,()=>{
    console.log("server is running")
})