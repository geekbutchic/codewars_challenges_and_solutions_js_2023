"use strict";

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Original Code
const evenOrOdd = num => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

let result = evenOrOdd(8);
console.log(result);

// Refactored version with arrow function
const evenOrOdd2 = n => (n % 2 === 0 ? "Even" : "Odd");

let result2 = evenOrOdd2(-7);
console.log(result2);
