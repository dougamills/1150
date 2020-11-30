/*
HOISTING

1-grammarAndTypes
    04-hoisting.js
*/

//example 1:
console.log(scissors); //logs undefined because it was above, hoisted ahead and before the var key and definition of "blue"
var scissors = 'blue';

//example 2:  LESSON>>> This (hoisting) is not what you should do usually... defining key variable should come prior to console logging...
function hoistTest(){
    console.log(testVar);  //logs as undefined because prior to defining testVar...
    var testVar = 10;
    console.log(testVar);  //logs 10 because testVar was defined prior line of code ran...
}

hoistTest();
