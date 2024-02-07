"use strict";

/* 
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:
1: -1
14: -14
-34: 34
*/

const opposite = num => num * -1;

let result = opposite(1);
console.log(result);

//JS -0 is still 0
console.log(-0 === 0); // true
console.log(-0 * -1); // 0


/* 
Reasoning:
Works by multiplying the input number `num` by -1. This operation effectively changes the sign of the number to its opposite.

Here's why it works:

1. Multiplication by -1: Multiplying any number by -1 changes its sign. If the number is positive, the result will be negative, and if the number is negative, the result will be positive. This is a fundamental property of arithmetic.

2. Example:
   - If `num` is positive (e.g., `5`), then `num * -1` equals `-5`, which is the opposite of `5`.
   - If `num` is negative (e.g., `-3`), then `num * -1` equals `3`, which is the opposite of `-3`.

3. Zero: If `num` is `0`, multiplying it by -1 will still result in `0`, as the additive inverse of 0 is itself 0.

So, the function `opposite(num)` correctly calculates the opposite of a given number by simply multiplying it by -1. This is a concise and efficient solution to the problem.
*/