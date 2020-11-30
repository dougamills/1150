/*
ARRAYS

    -Arrays are used to store multiple values in a single variable
        -there are array methods that allow us to traverse, as well as mutate, the data being held by an array

    -Arrays are 0 indexed, meaning the first item in an array will have an index of 0, and the last item will have an index of the arrays length -1
*/

let arr = ["this is the first element", "this is the second element", "This is the third element", "this is the fourth element"];

console.log(arr[arr.length - 1]);
console.log( arr[3]);

//This is the Array class constructor... not common but you may run into this 
let test = new Array();
test[0] = "did it work?"
console.log(test);


// forEach -- Executes the supplied ---------------
let boardGames = ["Monopoly", "Clue", "Risk", "Candy Land", "Catan"];

for (let i = 0; i < boardGames.length; i++) {
    console.log(boardGames[i]);
}

//---------forEach method-  Block body------
let boardGames = ["Monopoly", "Clue", "Risk", "Candy Land", "Catan"];

boardGames.forEach(game => {
    console.log(game);
})

//----------forEach method Concise body
let boardGames = ["Monopoly", "Clue", "Risk", "Candy Land", "Catan"];
boardGames.forEach(game => console.log(game));

//--------Anonymous Function
let boardGames = ["Monopoly", "Clue", "Risk", "Candy Land", "Catan"];
boardGames.forEach(function (game) {
    console.log(game);
})

//-------More Array methods or functions----------

//To access a specific element in an array, use bracket notation along with its index value
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList[0]);

//Array.length - returns the number of elements in the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.length);

//Array.push() - adds element to the end of the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.push("salt");
console.log(shoppingList);

//Array.unshift() - adds a new element at the beginning of the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.unshift("salt");
console.log(shoppingList);

//Array.pop() - removes the last element in the array and returns that element
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let removedElement = shoppingList.pop();
console.log(shoppingList);  //logs, outputs the entire array
console.log(removedElement); //logs, outputs just the last, removed element

//Array.shift() - removes the first element in the array and returns that element
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let removedElement = shoppingList.shift();
console.log(shoppingList); //logs, outputs entire array
console.log(removedElement); //logs, outputs just the first, removed element

//Array.map() - Transforms the elements in the original array by calling the given function once for eah element in the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.map(item => item.toUpperCase()));

//Array.filter() --creates a new array with only the elements that pass the test in a given function
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let newShoppingList = shoppingList.filter(item => item.startsWith("l"));
console.log(newShoppingList);

//Array.find() - returns the first element in the array that passes a test given as a function
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let shoppingItem = shoppingList.find(item => item.startsWith("l"));
console.log(shoppingItem);

//Array.includes() - determines whether an array has a specific element
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let isIncluded = shoppingList.includes("limes");
console.log(isIncluded);

//Array.indexOf() - search the array for a specific element and returns its first index where it resides.  Returns -1 when element is not found
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.indexOf("lemons"));
console.log(shoppingList.indexOf("salt"));

//Array.findIndex() - returns the index of the first element in the array that passes the test in a given function.  Returns -1 when the element is not found
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let foundIndex = shoppingList.findIndex(item => item.startsWith("g"));
console.log(foundIndex);

//Array.every() - checks if all elements in an array pass a test given as a function. If there is 1 element that returns a false value, the function returns false and does not check the rest of the elements (i.e. checking for uniformity)
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.every(item => item.length > 1));
console.log(shoppingList.every(item => item.length > 10));

//Array.concat() - Merges two or more array, and returns a new combined array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let anotherShoppingList = ["salt", "mint leaves", "olives"];
let combinedArrays = shoppingList.concat(anotherShoppingList);
console.log(combinedArrays);

//Array.slice() - Selects a part of the array and returns a new array.  Selects the elements starting at the provided start argument and ends at, but does not include the provided end argument.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let newArray = shoppingList.slice(2, 4);
console.log(newArray);

//Array.splice() - This adds or removes elements in the array and returns the removed elements.  First argument takes in an integer that specifies at what index to add/remove elements.  Second argument takes in the number of items to be removed.  Optional third argument that takes in the new elements to be added to the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.splice(2, 2, "salt", "mint Leaves");
console.log(shoppingList);

//Array.sort() = sorts the items in an array. The sort order can either be alphabetic or numeric, and either ascending or descending.  By default, sort() orders the values as strings in alphabetical or ascending order. Can take in a compar function which indicates in you want to sort by ascending or descnding.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList)
console.log(shoppingList.sort())

let costs = [3, 2, 13, 4];
console.log(costs.sort((a, b) => b -a)); //sorts in descending order
console.log(costs.sort((a, b) => a - b));  //sorts in ascending order

//Array.reverse() - reverses the order of the elements in the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.reverse());

//Array.toString() - converts the array into a string
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.toString());

//Array.join() - converts the elements in the array into a string. Can acept an optional parameter, "seperator", which indicates how the elements will be seperated.  Default seperator is a comma.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.join("! and "));  // adds "! and " between each element
console.log(shoppingList.join());  //just took away the spaces between the elements

//Lastly, an ES6 feature:  The spread operator. The spread operator, indicated by these 3 dots "..." expands (or destructures) the contents of the array and takes it out of the array structure
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList);
console.log(...shoppingList);  //removed quotes and commas between elements
//...........
let numArray = [20, 40, 60];
function sum(numOne, numTwo, numThree){
    return numOne + numTwo + numThree;
}
console.log(sum(...numArray));  //logs, outputs the sum of the three numbers in the numArray
