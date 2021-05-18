const fs = require("fs");
const path = require("path");

const f1 = path.join(__dirname, "inp1.txt");
const f2 = path.join(__dirname, "inp2.txt");
const f3 = path.join(__dirname, "output.txt");

function readF1() {
  return new Promise((resolve, reject) => {
    fs.readFile(f1, (err, data) => {
      if (err) throw err;
      resolve(data.toString().split("\n"));
    });
  });
}

function readF2() {
  return new Promise((resolve, reject) => {
    fs.readFile(f2, (err, data) => {
      if (err) throw err;
      resolve(data.toString().split("\n"));
    });
  });
}

function writeF3(ans) {
  return new Promise((resolve, reject) => {
    fs.writeFile(f3, ans, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

let ans;

readF1()
  .then((data) => {
    ans = data;
    return readF2();
  })

  .then((data) => {
    ans = ans.concat(data);
    ans.sort((a, b) => a - b);
    ans.join("\n");
    return writeF3(ans);
  })

  .then(() => {
    console.log("all done successfully");
  })
  .catch((err) => {
    console.log(err);
  });
