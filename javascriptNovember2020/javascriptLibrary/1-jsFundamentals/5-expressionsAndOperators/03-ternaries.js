/*
TERNARIES

5-expresssionsAndOperators
    03-ternaries.js
    */

//First Example using Ternary appproach...
    let x = -6;

    x > 0 ? console.log('x is positive') : console.log('x is negative');
//First Example using IF ELSE approach...
    let x = -6;

    if (x > 0){
        console.log('x is positive');
    } else {
        console.log('x is negative');
    }


//Second example using IF ELSE....
    let greeting = 'salutations!';

    if (greeting.length > 10) {
        console.log('that is a long greeting');
    } else if (greeting.length == 10){
        console.log('your greeting is exactly 10 characters');
    } else {
        console.log('what a normal greeting');
    }
 //Second example now written using Ternaries approach instead...  
    let greeting = 'salutations!';
 //the question mark here is like the "IF"... the colon is like the "ELSE"...
    greeting.length > 10 ? console.log('that is a long greeting') :
    greeting.length == 10 ? console.log('your greeting is exactly 10 characters') :
    console.log('what a normal greeting');


    