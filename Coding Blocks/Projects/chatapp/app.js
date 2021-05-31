const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static("public"));


const users = {};

io.on("connection", (socket) => {
  socket.on("login", (data) => {
    // console.log(data.name);
    users[socket.id] = data.name;
  });

  socket.on("send_msg", (data) => {
    // console.log(data.msg);
    io.emit("recieved_msg", {
      msg: data.msg,
      name: users[socket.id],
    });
  });
});

server.listen(process.env.PORT || 4040, () =>
  console.log(`> Server is up and running at http://localhost:4040`)
);
