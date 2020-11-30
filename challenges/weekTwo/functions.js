/*
Functions:

-JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression

-Function declarations are hoisted in our code, and run ONLY when we call them (invoke them).  So any function in our code sits and waits to be ran until we call it by name.  Think of it as a student with his or her hand up, waiting to ask a question.  Tha student does not ask the question until the teachre calls upon them.

-function expressions are not hoisted, and are generally stored in variables.

-functions without names are known as anonymout functions
*/

//Function Declaration
//creating the function declaration...
function sayHello() {
  console.log("Hi");
}
//calling or invoking the function...
sayHello(); //will result in "Hi" showing up in console window

//Function Expression
//creating the function expression...
let greetings = function () {
  console.log("Hello");
};
//calling or invoking the function expression...
greetings();

/*
Parameters

-Think of paraemeters as a newly declared variable that we have not given a value to yet
    -The value that we pass into our function when we call the function to run (which is known as an argument), is the value that gets assigned to the parameter.
    -General naming convention for function parameters:  the parameter should be named something related to the information we're passing into the function.  If we're passing in an integer(whole number), we may name our parameter num or number.
*/

function myDog(husky) {
  console.log(`My dogs name is ${husky}`);
}

myDog("Princess"); //"Princess" is the argument.. will be the outcome in console log window
myDog("luna");
myDog("Jama");

function allMyDogs(smallHusky, bigHusky, borderCollie) {
  console.log(
    `My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`
  );
}

allMyDogs("Mira", "Luna", "Charlie");

/*
Return

-functions can also manipulate the data sent to them, and return a new value

-Note that the Code below "return" does not get executed
*/

function calculator(one, two, three) {
  let totalWeight = one + two + three;
  let average = Math.round(totalWeight / 3);
  return average;
  return totalWeight; //this doesn't get executed since there is another return prior getting executed first
}

let averageWeight = calculator(15, 60, 55);
console.log(averageWeight);

/*
Arrow Functions

-Arrow functions (or fat arrow function) were introduced in ES6.  They are basically just a more concise way to write function expressions - NOT declarations
    -This means that arrow functions do NOT get hoisted

-There are two types of arrow functions:  concise body and block body
    -The return happens automatically with a concise body arrow function
    -The return does not happen automatically with a block body arrow function
*/

//Concise body  (returns result automatically...)
let speak = (name) => console.log(`${name} goes wooooof`);
speak("Luna");

let nameJoiner = (first, last) => `${first} ${last}`;
let fullName = nameJoiner("Donovan", "triplett");
console.log(fullName);

//Block Body (does not return automatically... you have to do something to make it return result)
let speak = (name) => {
  console.log(`${name} gooes woooof`);
};

let fullName = nameJoiner("Donovan", "Triplett");
console.log(fullName);

// PRACTICE I - from Rob start of afternoon session Sat Nov 21st
// Write a function that takes two parameters  (Length and Width) that returns the area of the rectangle.
// Create a variable named area1 and area2 that will call the Function and store its return
// console log the variables
// Example :  4 by 8 rectangle will give  32;

function areaCalculator(length, width) {
  let area = length * width;
  return area;
}

let area1 = areaCalculator(5, 2);
let area2 = areaCalculator(10, 2);

console.log(area1);
console.log(area2);

//PRACTICE II
//write a function that will convert dog years to human years
// Formula for conversion  - Human Age = (Dog Age -2) x 4 + 21

function dogToHumanYears(dogAge) {
  let humanAge = (dogAge - 2) * 4 + 21;
  return humanAge;
}

console.log(dogToHumanYears(11));

//another way to get this done is as follows;
function dogToHumanYears(dogAge) {
  return (dogAge - 2) * 4 + 21;
}

console.log(dogToHumanYears(11));

/*
HOISTING 
    -hoisting was thought up 
*/
goodBye();
var hello = "hello";

console.log(hello);
function goodBye() {
  console.log("goodbye");
}

let name = "Rob";
console.log(name);

//-------------------

console.log(hello);
var hello = "hello"; //In this example since this variable is not defined until after the console.log this code will come back "undefined"

var hello = "hello";
console.log(hello); //in this example variable is defined before console logging so it comes back "Hello"

//----------------------

var coffeeType = "dark roast";

function exampleFunction() {
  var coffeeType = "vanilla roast";
  console.log(coffeeType);
}

exampleFunction();

console.log("Outside the function", coffeeType);



//--repl.it challenge "Count to Ten"
function countToTen() {
  for(var i = 1; i <= 10; i++) {
      console.log(i);
  }
}

countToTen();

//---repl.it challenge to also check and list even or odd... solution care of Zach who got help from TA
for(let i = 0; i <= 10; i++){
  evenOrOdd(i);
}
function evenOrOdd(num){
console.log(num);
if (num % 2 === 0){
  console.log("the number is even")
} else if (num % 1 === 0){
  console.log("the number is odd")
}
};

