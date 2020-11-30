/*
SCOPE

1-grammarAndTypes
    O3-scope.js
    */

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/

var x = 12;

function scope() {
  var x = 33;
  console.log(x);
}
scope(); //logs 33
console.log(x); //logs 12

//example2
var x = 12;

function scope() {
  x = 33;
  console.log(x);
}

scope(); //logs 33
console.log(x); //logs interprets reads finds 33

//example 3 (more scope)
var x = 1;

function scope() {
  var x = 2;
  function scopeInner() {
    var x = 3;
    console.log(x); //first console to run "innermost/local"... logs 3
  }
  scopeInner();
  console.log(x); //second console to run "inner/local"... logs 2
}
scope();
console.log(x); //third concsole to run "global"... logs 1




//example 4 contrast with 5:
var x = 12;

function scope() {
  var x = 33;
  if (true) {
    let x = 45;
    console.log(x);  //logs 45 from innermost local "if" "let"
  }
  console.log(x);  //logs 33 from inner local
}

scope();
console.log(x);  //logs 12 from outer or "global" definition of "x"

//example 5 contrast with 3
var x = 12;

function scope() {
  var x = 33;
  if (true) {
    var x = 45;
    console.log(x);  //logs 45 from innermost local "if" "var"
  }
  console.log(x);  //logs 45 --> var doesn't obey "block' scope"
}

scope();
console.log(x);  //logs 12 from outer or "global" definition of "x"
