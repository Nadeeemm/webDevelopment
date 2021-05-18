const fs = require("fs");
const path = require("path");

const f1 = path.join(__dirname, "inp1.txt");
const f2 = path.join(__dirname, "inp2.txt");

fs.readFile(f1, (err, data) => {
  const arr1 = data.toString().split("\n");
  // console.log(arr1);
  fs.readFile(f2, (err, data) => {
    const arr2 = data.toString().split("\n");
    // console.log(arr2)
    let res = arr1.concat(arr2);
    res.sort((a, b) => a - b);
    res = res.join("\n");
    // console.log (res)

    fs.writeFile('output.txt', res, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

    // fs.writeFile('output.txt', res, (err)=>{
    //   encoding: 'utf-8',
    //   // flag: 'w',
    // })
    // (err) => {
    //     console.log("file written successfully");
    //   }
  })
})
