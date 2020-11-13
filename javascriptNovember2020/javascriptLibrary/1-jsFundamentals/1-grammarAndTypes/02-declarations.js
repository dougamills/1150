/*
VARIABLES

1-grammarAndTypes
    020declarations.js
    */

    //What is a variable?
    var a = 1;
    var b = 2;
    console.log(a + b);

//n0tes on naming varialble:
//1) a variable must begi with a letter, underscore, or dollar sign
//2) numbers may follow the above charaters, but cannot come first
//3) JavaScript is case sensitive--'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refere to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value.  This can be after initialization.
*/

var x;
console.log('Declaration1:', x);

x = 10
console.log('Initialization 1:', x);

x = 33
console.log('Assignment 1:', x);

var y;
console.log(y);

y = 'hello';
console.log(y);

y = 'you are my fren';
console.log(y);

/*
var, Let, ad Const:

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)
const = also 'new', declares unchangeable variables
*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

// elevenFifty = 'Super!''
