const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  // socket.on("boom", () => {
  //   console.log("BOOOOOMMMMM!!!!!");
  // });

  // setInterval(() => {
  //   socket.emit("whizz");
  // },2000);

socket.on('send_msg',(data)=>{
console.log(`${socket.id} says: ${data.msg}`);
io.emit('recieved_msg',{
  msg:data.msg,
  id: socket.id,
})


})



  console.log(socket.id);
});

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

server.listen("4040", () =>
  console.log(`> Server is up and running at http://localhost:4040`)
);
