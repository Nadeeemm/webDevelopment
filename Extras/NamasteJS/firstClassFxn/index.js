// Function Statement
function a() {
  console.log("a called");
}

// Function Expression
var b = function () {
  console.log("b called");
};

a();
b();

//  Anonymous Function
//  function (){

//  }

// Named FunctionExpression
var b = function xyz() {
  console.log("b called");
};

// different b/w Parameters and Arguments
function a(x, y) {
  console.log(x + y);
}

a(1, 2);
// here in the above function (x,y) are the parameters
// and (1,2) are the arguments

// First class Functions
// (passing a function inside another function)

//  What's a callback Function
setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

// Event Listener

function attachEventListener() {
  let count = 0;
  document.getElementById("clickme").addEventListener("click", function () {
    console.log("button is clicked", count++);
  });
}
attachEventListener();
