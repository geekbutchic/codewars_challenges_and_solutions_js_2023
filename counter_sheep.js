'use strict';

/* 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/

const sheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]


function countSheeps(sheep) {
  let count = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === false) {
      continue; // Skip to the next iteration if the value is false
    }
    if (sheep[i] === true) {
      count++; // count = count + 1;
    }
  }
  return count;
}

console.log(countSheeps(sheeps));

/*
1. It initializes a variable called `count` to keep track of the number of `true` values found in the `sheep` array.

2. It uses a `for` loop to iterate through each element in the `sheep` array.

3. Inside the loop, it checks if the current element is equal to `false`. If it is, the `continue` statement is used to skip to the next iteration without incrementing the `count`. This ensures that `false` values are ignored.

4. If the current element is equal to `true`, it increments the `count` by 1, effectively counting that `true` value.

5. Finally, the code returns the `count`, which represents the total count of `true` values in the `sheep` array.

In summary, the code counts the number of `true` values in the input array by using a `for` loop, and it skips over `false` values using the `continue` statement. This ensures an accurate count of `true` values while ignoring `false` values.
*/