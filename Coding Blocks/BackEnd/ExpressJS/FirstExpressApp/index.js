const express = require('express');
const app= express();

app.use((req,res)=>{
    // console.log("You made a request!!");
    // res.send('Hey you just made a new request')
    res.send('<h1> We can also send html as request </h1>')

})





app.listen(3000,()=>{
    console.log('server is listening on port 3000');
})