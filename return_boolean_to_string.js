/*
Convert a Boolean to a string?

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

//Solution with if/else
function booleanToString(b) {
  if (b === true) {
    return "true";
  } else {
    return "false";
  }
}

const test = booleanToString(true); //Given boolean value
console.log(`If/Else Solution: `, typeof test); //If/Else Solution:  string

//Arrow solution with ternary statement
const booleanToString1 = b => (b === true ? "true" : "false");

const test1 = booleanToString1(true);
console.log(`Arrow Function Solution: `, typeof test1);

/* 

* b (param) is given as boolean value
* condition b === true ? 
* return 'true' string
* else false return 'false' string

*/

//Clever solution
function booleanToString2(b) {
  return b.toString();
}

const test2 = booleanToString2(false);
console.log(`.toString() solution: `,typeof test2);

/* 
* Converts any boolean value to a string
*/