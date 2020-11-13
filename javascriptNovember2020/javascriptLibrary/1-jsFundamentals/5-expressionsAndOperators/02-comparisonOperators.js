/*
COMPARISON OPERATORS

5-expressionsAndOperators
02-comparisonOperators.js
*/

//equality comparison operator
console.log('3' == 3);
console.log(4 == 4);
console.log(3 == 4);KeyboardEvent

//strict equality comparison operator
console.log(3 === 3);
console.log('3' === 3)

//not equal comparison operator
console.log('3' != 4);
console.log('3' != 3);KeyboardEvent

//strict not equal comparison operator
console.log('3' !== 3);
console.log(3 !== 3);

//greater than
console.log(3 > 2);
console.log(2 > 3);

//less than
console.log(2 < 3);
console.log(3 < 2);

//greater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);

//less than or equal to
console.log(2 <= 3);
console.log(3 <= 2);

//And (both expressions on either side of the operator must be true to return true for 'And' to return true)
console.log(1<2 && 3>0);
console.log(2<1 && 3>0);

//Or (either expression true...)
console.log(1<2 || 3<0);
console.log(2<1 || 3<0);

let obj = {key: 'test'};
console.log(obj == {key: 'test'});

console.log(obj == obj);

let arr = [1,2,3,4];

console.log(arr == [1,2,3,4]);
console.log(arr == arr);








