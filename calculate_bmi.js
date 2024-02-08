"use strict";

/* 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//Original Version
// const bmi = (weight, height) => {
//   let bmi = weight / height ** 2;
//   if (bmi <= 18.5) {
//     return "Underweight";
//   } else if (bmi <= 25.0) {
//     return "Normal";
//   } else if (bmi <= 30.0) {
//     return "Overweight";
//   } else if (bmi > 30.0) {
//     return "Obese";
//   }
// };

// Refactored Version
// const bmi = (weight, height) => {
//   let bmiValue = weight / height ** 2;

//   if (bmiValue <= 18.5) return "Underweight";
//   if (bmiValue <= 25.0) return "Normal";
//   if (bmiValue <= 30.0) return "Overweight";

//   return "Obese";
// };

//Preferred Method with Switch Statement
const bmi = (weight, height) => {
  let bmiValue = weight / height ** 2;
  switch (true) {
    case bmiValue <= 18.5:
      return "Underweight";
    case bmiValue <= 25.0:
      return "Normal";
    case bmiValue <= 30.0:
      return "Overweight";
    default:
      return "Obese";
  }
};

let result = bmi(80, 1.8);
console.log(result);
