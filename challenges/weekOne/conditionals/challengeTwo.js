let myString = 'this is a string';
let myNumber = 10;
let myBoolean = false;
let myArray = [10, "sting", ["another string", 10]];
let myObject = {firstKey: "a string"}
let myUndefined = undefined;
let myNull = null;

console.log(typeof myBoolean);


//BRONZE
//creat an object that contains a String, number, boolean, and object. 
//console log the type

let myObject = {
    string: "string",
    number: 15,
    boolean: true,
    object: {}
}

console.log(typeof myObject.number)


//SILVER
//Write a conditional that checks the type of one of the values stored in the object and console logs
// the data type. If the value is not a string, number, boolean, or object console log "what are you?!"

let value = typeof myObject.string;

if (value === "string"){
    console.log('contains a string');
} else if (value === "number"){
    console.log('the value is a number');
} else if (value === "boolean"){
    console.lot('contains a boolean');
} else if (value === "object"){ 
    console.log('contains an object');
} else {
    console.log("what are you?");
}
