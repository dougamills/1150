/*
LITERALS

1-grammarAndTypes
    06-literals.js
*/

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//                 0         1          2             3         4
console.log(weekDays.toString());  //logs the entire array in a string, list, all of the items inside weekDays
console.log(weekDays[3]);  //only logs the 3rd position or item in the array (i.e. "Thursday")

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}
console.log(soup.c);  //only logs "key item "c" with value "beef and barley" item from inside the curly brackets object?"

//array and object literals  (are complex or dynamic types... unlike primitive types like true/false booleans, nulls etc)... can hold primitive and complex types (arrays, objects, functions)
let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
//
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

//another example here below... this time Object vs Array notice curly brackets for an object instead of box brackets (array)...
//note key value pairs>>>key:value  key: value      key: value      key: value    key: value          key: value
let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}};

console.log(complexObjLiteral); //logs entire content of the object in-order, string(?)
console.log(complexObjLiteral.func); //logs just the "func" in the object....
console.log(complexObjLiteral.arr);  //logs just the "arr" portion of the object...


//For Repl.it Assignment 1.2 due Nov 24th, 2020
let complexObjLiteral = {nameOfMovie: "Diehard", runTime: "140mins", characters: "John McClane-Holly Genero-Al Powell", specialCharacter: "HansGruber", item: "machineguns-C4-rocketLaunchers"};

console.log(complexObjLiteral); //logs entire content of the object in-order, string(?)
console.log(complexObjLiteral.func); //logs just the "func" in the object....
console.log(complexObjLiteral.arr);  //logs just the "arr" portion of the object...