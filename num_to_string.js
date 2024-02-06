"use strict";

/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?
*/

//Solution
const numberToString = (num) => {
  return num.toString();
};

//Refactored One Liner Solution
const numberToString2 = num => num.toString();

let result = numberToString(67);
console.log(typeof result, result);

let result2 = numberToString2(69);
console.log(typeof result2, result2);