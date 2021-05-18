const express = require('express')
const app = express()
const path = require('path')



app.set('view engine', 'ejs');
app.use(express.static('public'))
app.set ('views',path.join(__dirname,'/views'))
// console.log(__dirname, '/views')

app.get('/', (req,res)=>{

    res.send('this is the root route')

})

app.get('/rand', (req,res)=>{
    const num= Math.floor(Math.random()*10+1);
    res.render('random',{randomNum:num})
})


app.get('/home',(req,res)=>{
    res.render('home')
})

app.listen(5000,()=>{
    
})