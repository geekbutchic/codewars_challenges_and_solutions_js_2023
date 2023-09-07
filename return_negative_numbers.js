/*

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

*/
// Function
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

console.log(makeNegative(42));

//Arrow Function with Ternary Statement 
const makeNegative1 = num => (num < 0) ? num : num * -1;
//                           condition ? expressionIfTrue : expressionIfFalse

console.log(makeNegative1(-42));

/* 

* const makeNegative1 declares a constant variable named makeNegative1. This variable represents an arrow function.
* If num is already negative (num < 0 is true), it returns num as is.
* If num is not negative (num < 0 is false), it returns the negation of num, making it negative.

*/

//Alternative solution 
const makeNegative2 = n => -Math.abs(n);

console.log(makeNegative2(5)); // makes negative
console.log(makeNegative2(-5)); // returns 5 through Math.abs(n) than negates absolute value 

//Note : To "negate" means to reverse the sign or value of something, typically from positive to negative or from negative to positive.

/* 
In summary, this function works as follows:

* It calculates the absolute value of the input number n using Math.abs(n), which ensures that the result is non-negative.

* It negates the absolute value result by adding a - sign in front of it, making the number negative.

*/