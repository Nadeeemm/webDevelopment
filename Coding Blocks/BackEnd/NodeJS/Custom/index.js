const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.2";
const port = 4000;

const home = fs.readFileSync('index.html');



const about = fs.readFileSync("./about.html");
const services = fs.readFileSync("./services.html");
const contact = fs.readFileSync("./contact.html");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  url = req.url;
  if(url == '/index.html'){
  res.end(home);
  }
  else if(url == '/about.html'){
      res.end(about);
  }
  else if(url == '/services.html'){
      res.end(services);
  }
  else if(url == '/contact.html'){
      res.end(contact);
  }
  else{
      res.statusCode = 404;
      res.end("<h1>404 not found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
