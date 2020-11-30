/*
ARROW FUNCTIONS
*/

//normal function declaration (for named functions)
function coffee(){
    return 'coffee is good';
}

//normal function expression (for unnamed functions)
let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea ());


//arrow functions are *always* anonymous
//arrow function expression
// notice there is no word "function just the () instead an arrow => between paratheses and curly bracket"
let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate());

//another arrow function example
let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3, 2));
console.log(animals(0, 0));

//concise vs. block body
//concise body example (notice didn't need the paratheses (for function) nor return )
let apples = x => `there are ${x} apples`;
console.log(apples(10));

//block body example  (can use paratheses but don't have too)
let bananas = (x) => {
    return `there are ${x} bananas`;
}
console.log(bananas(5));

//return must be explicitly written in a block-body arrow function







