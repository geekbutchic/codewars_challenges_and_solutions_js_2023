/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// If else version
// function loveFunc(flower1, flower2) {
//   if (flower1 % 2 === 1 && flower2 % 2 === 0) {
//     return true;
//   } else if (flower1 % 2 === 0 && flower2 % 2 === 0) {
//     return false;
//   } else if (flower1 % 2 === 1 && flower2 % 2 === 1) {
//     return false;
//   } else {
//     return true;
//   }
// }

// Refactored Version
function loveFunc(flower1, flower2) {
  return flower1 % 2 === 0 !== (flower2 % 2 === 0);
}

/* 
1. (flower1 % 2 === 0) checks if flower1 has an even number of petals.
2. (flower2 % 2 === 0) checks if flower2 has an even number of petals.
The expression (flower1 % 2 === 0) !== (flower2 % 2 === 0) returns true if one of the flowers has an even number of petals and the other has an odd number, and false if they are both either even or odd. This simplifies the logic and reduces the number of if statements.
*/

console.log(loveFunc(1, 4));
console.log(loveFunc(2, 2));
console.log(loveFunc(0, 1));
console.log(loveFunc(0, 0));
