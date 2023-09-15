"use strict";
/* 
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
*/

function paperwork(classmates, paperwork) {
  //  checking for negative
  if (classmates < 0 || paperwork < 0) {
    return 0;
  } else if (classmates > 0 && paperwork > 0) {
    return classmates * paperwork;
  }
}

console.log(`If-Else: `,paperwork(5, 5));

/* 
The problem is asking you to calculate how many blank pages are needed for copying paperwork for a given number of classmates ('n') and a certain number of pages of paperwork ('m'). The problem statement also specifies that if 'n' or 'm' is negative, you should return 0.

1. Handle Negative Inputs:
* Your solution starts with an if statement to check if either 'n' or 'm' is negative. If either of them is negative, you return 0. This part of your solution correctly handles the requirement to return 0 if 'n' or 'm' is less than 0.

2. Handle Positive Inputs: 
* Your solution uses an else if statement to check if both 'n' and 'm' are greater than 0 (positive values).

* If 'n' and 'm' are both positive, you return the product of 'n' and 'm' (return m * n). This part of your solution calculates the total number of pages needed, assuming each classmate needs 'm' pages.

*/

//Refactored version with comparison operator
function paperwork1(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

console.log(`Function Declaration: `,paperwork1(5, 5));

const paperwork2 = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

console.log(`Arrow-Function: `,paperwork2(5, 5));
