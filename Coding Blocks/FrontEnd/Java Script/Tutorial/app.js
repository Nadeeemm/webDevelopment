// console.error('This is a warning')

// let firstName='Nadeem'
// let lastName='Khan'

// console.log("my First Name is:"+firstName)

// let fullName= `My Full Name is:${firstName} ${lastName}`;
// console.log(fullName)

// console.log(`${firstName} ${lastName}`)

// Math.PI

// let num=prompt("enter number to check");
// if (num>5){
//     console.log("Yes it is greater")
//    }
// else{
//     console.log("No, It is smaller")
// }

//  let fruit= ["apple","grapes","orange"]
//  fruit.pop();
//  console.log(fruit);
//  fruit.push("blue","red","pink");
//  console.log(fruit);

//  fruit.shift();
//  console.log(fruit);


// -----------------------------------more about Array methods------------------------------------

// ======= concat
// let ar1=[1,2,3,4];
// let ar2=["a","b","c","d"];
// let ar3=ar1.concat(ar2);
// console.log(ar3)

// ======= includes
// let colors=["red","orange","pink","green"];
// console.log(colors);
// colors.includes("pink");
// console.log(colors.includes("pink"));

// ======= reverse
// colors.reverse();
// console.log(colors)


// ======= Slice
// let ar=[1,2,3,4,5,6]
// ar.slice(2,4);                    
// console.log(ar.slice(2,4));
// [Here 2 is the ending index, and starting index is 4] 

// ======= splice
// let ar=[1,2,3,4,5,6,7,8]
// deleted=ar.splice(0,3)
// console.log(ar)


// ======= Split
// let a= ("Hey I am new here")
// a.split(" ");
// console.log(a.split(" "))
// [here it splitted the sentance into an array]

// ======= Join
// let ar=[1,2,3,4,5,6]
// ar.join("-")
// console.log(ar.join("-"))


// --------------------------------------------- Java Script Objects--------------------------------

// ======= const
// const person={
//     firstName: "Nadeem",
//     age:23,
//     isAdult:true,
// }

// console.log(person)
// console.log(person.age)

// -----------------------------------------------Loops-------------------------------------------------

// ======= For Loop
// for( let i=0; i<=10; i++){
//     console.log(i);
// }

// for(i=10; i>=0; i--){
//     console.log(i)
// }


// ^^^^^^^ break (it will break the loop at the given point)
// for(let i=1; i<=10; i++){
//     if(i==5){
//         break;
//     }
//     console.log(i)
// }

// ^^^^^^^ continue (it will only skip that perticular point)
// for(let i=1; i<=10; i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i)
// }

// ======= while loop
// let num=0
// while(num<=10){
//     console.log(num);
//     num++;
// }

// ======= for-of loop
// let ar=[1,2,3,4,5,6]
// for(let i of ar){
//     console.log(i);  
// }

// ======= for-in loop 
// const car={
//     name:"Audi",
//     price:10000,
//     isDiscBreak:true,
// }
// for(let item in car){
//     console.log(item);
// }

// ------------------------------------------Functions--------------------------------------------------

// function say(){
//     console.log("hello world")
// }

// say()



// function add(a, b) {

//     let result = a + b
//     console.log(result)
// }

// add(2,2)

// add("hello","world")

// add("",2)                   [empty string will be treated as 0(zero)]

// add("hello",10)                 [here 10 will be converted into a String]

// add(true,10)                      [Boolyn true will be treated as 1]
// add(false,10)                      [Boolyn false will be treated as 0]

// ======= Default Arguments
// function subs (x,y,z=2){
//     return (x-y-z);
// }
// let ans= subs(2,3);
// console.log(ans)

// var z= function y(){
//     console.log("Hello")
// }
// console.log(z)
// z();

// ------------------------------------------ scopes -----------------------------------------------
// let x=10;
// let y=20;
// if (x>5){
//     y=30;
//     console.log(y);
// }
// console.log(y)

// let x=10;
// let y=20;
// if (x>5){
//      let y=30;
//     console.log(y);
// }
// console.log(y)

// let and const have block scopes
// but Var has functional scopes

// var x= 100;
// if (true){
//     var x=200;
//     console.log(x)
// }
// console.log(x)


// ======= Call Back Function 

// function fun(x){
//     x();
// }

// function innerFun(){
//     console.log("Inner Fun")
// }

// fun(innerFun)            #Passing another function as an argument


// ------------------------------- Array methods which accepts call back------------------------------------

// ======= Map()

// function sq(num){
//     return num * num
// }

// sq(2);


// let a= [1,2,3,4,5,6,7]
// b= a.map(sq);

// console.log(b)

// ========== Filter()

// let ar = [1,2,3,4,5,6,7,8,9];

// function isOdd(num){
//     if(num % 2 !==0){
//         return true;

//     }
// }

// let res = ar.filter(isOdd);
// console.log(res)


// ----------

// let menu =  ["chicken korma", "chicken Noodles","chicken roll", "garlic naan",
// "garlic noodles","garlic bread", "veg biryani","rajma chawal","dal fry"]

// function isVeg(food){
//     if(food.toLowerCase().indexOf('chicken')==-1){
//         return true;
//     }
// }

// let vegMenu = menu.filter(isVeg)
// console.log(vegMenu)

// -------------------------------------- Prototypes ------------------------------------------

// const person = {
//     name: "Kartik",
//     age: 21,
//     sayHello: function(){
//         console.log("Hello Everyone");
//     }
// }

// let p1 = Object.create(person)

// let p2= Object.create(p1)

// p1.name = "vivek"

// ======= constructor Function

// function fun(name){
//     console.log(this);
//     this.name = "kartik"
// }
// fun()

// --------

// function person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.msg = function () {
//         console.log(`Hello from ${this.name}`);

//     }

// }



// let p1 = new person("kartik", 21)

// let p2 = new person("vivek", 25)

// ------------

// ------------------------------------ .this Binding (types)------------------------------------------

// ======= 1. Implicit Binding 

// const obj = {
//     name:"Audi",
//     price:10000,
//     getPrice: function(){
//         console.log(this);
//     }

// }

// ======= 2. Explicit Binding 


// function fun(name) {
//     console.log(this);
//     console.log(name);

// }
// const a = {
//     l=20,
//     m=10,
// }


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Lecture-12 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// ======= Image animation 

// const image = document.querySelector('img');

// let isTrue = false;

// setInterval(() => {

// const car ={
//     name : "Audi",
//     price: 1000,
//     startCar: function(){
//         console.log(this);
//         console.log(this.name);
//     }
// }
// car.startCar();


// window.setTimeout(function(){
//     console.log("welcome")
// },3000);


// ======= Promise
// function fun() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             let randomNumber = Math.random();
//             console.log(randomNumber);
//             if (randomNumber < 0.5) {
//                 resolve();
//             }
//             else {
//                 rejected();
//             }


//         }, 100);

//     })
// }

// fun().then(function(){

//     console.log("Promise Resolved")

// })

// .catch (function(){
//     console.log("Promise Rejected")

// })



//     if (isTrue) {
//         image.setAttribute('src', 'https://images.unsplash.com/photo-1616273695000-ec14158cf3f1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
//     }
//     else {
//         image.setAttribute('src', 'https://images.unsplash.com/photo-1616263291353-0a89a385ea17?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
//     }
//     isTrue = !isTrue
// }, 1500);