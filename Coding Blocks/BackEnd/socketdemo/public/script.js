const socket = io();
const btn = document.querySelector("button");
const inp = document.querySelector("#inp");
const list = document.querySelector("#list");

// setTimeout(() => {
//   console.log(socket.id);
// }, 2000);

// socket.on("whizz", () => {
//   const h3 = document.createElement("h3");
//   h3.innerText = "Whizzzzzz";

//   document.body.append(h3);
// });

// btn.addEventListener("click", () => {
//   socket.emit("boom");
// });
socket.on("recieved_msg", (data) => {
  const li = document.createElement("li");
  li.innerText = (` ${data.id} says ${data.msg}`);
  list.append(li);
});

btn.addEventListener("click", () => {
  socket.emit("send_msg", {
    msg: inp.value,
  });
  inp.value = "";
});
