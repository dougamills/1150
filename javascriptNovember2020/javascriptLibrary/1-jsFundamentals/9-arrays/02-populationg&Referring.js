/*
ARRAYS
*/

//what is an array?
//has [] brackets
//can hold multiple datatypes
//arrays can list datatypes in an ordered, number way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:     0       1          2       3     4    5        6
console.log(typeof students);  //typeof doesn't tell me my variable is an array --> object
console.log(students instanceof Array);  //instanceof tells me my array is an array
console.log(students[2]);  //logs, outputs Rhys
console.log(students[1]); //logs, outputs Marshall
console.log(students[6]);  //logs, outputs ['Ryan', 'Iesha']

let name = students[6][1];  //will log, outputs Iesha (from inside position 6 of the original array)
console.log(name);
console.log(`Hello ${name}, you look nice today.`); //will take the last "name" scenario logged/output and add into sentence for output

//recall for-of loop--> gives the values of the array
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

// for (f of food){
//     console.log(f+' is amazing!'); //logs, outputs the entire list in "food" array and inserts each into sentence __ is amazing!
// }

// //array methods
// food.push('pizza');  //push lets us add an item onto end-of the already existing array...
// console.log(food);
// food.splice(1, 1, 'bananas'); //splice lets us insert into existing above array, remove __ items, defines item to add
// console.log(food);
// food.splice(2, 0, 'sweet potato pie'); //asks for an insertion point, how many to remove, item(s) to add
// console.log(food);
// food.pop();  //removes the last element of an array
// console.log(food);

// food = food.slice(2,5); //the first number is the first element to slice from the array, the second number is the stop position (not to be included)
//     console.log(food);

//forEach allows us to iterate with loops specifically, and we can directly grab both the elememts and their index numbers
//food.forEach((f) => console.log(f)); //logs, outputs entire contents of "food" array...


// food.forEach((food, index) => {
//     console.log(food);
//     console.log(index); //results of this arrangement (previous three lines) logs, outputs entire contents of "food" array... but the index log also logs, outputs the positon of each in the array "after" each item/content of the array
// })

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`); //logs, outputs each item of the array & index position... inserts both pieces of information inside the sentence each, all one after previous for all 
})

//-----------------------------------
let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];
    console.log(movies);
movies.push('The Force Awakens');  //adds 'The Force Awakens' to the end of the above array list...
    console.log(movies);
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');  //inserts @ 3rd array item, removes 1 array item, replaces 3rd array item with 'The League of Extraordinary Gentlemen'
    console.log(movies);

movies.forEach(movie => console.log(movie));  //another way to list out every item inside the array "movies"
console.log(movies.length); //this command logs, outputs, returns quantity of items in out array...

//------------------------------------
//let's do the following with an array;
//1) We will check if we are working with an array
//2) flip the values with the array (what was in index 4 is not in 0, 3 to 1, etc.)
//3) using a method only, let's print the values of the newly arranged array
let arr = new Array(1,2,3,4,5);
    console.log(arr);  //logs, outputs brackets and entire contents of array including commas
if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));  //these previous two lines picked the number items from the "arr" array, reversed their order and logged, output those numbers in reverse order
}











