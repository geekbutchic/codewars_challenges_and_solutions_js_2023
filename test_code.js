// // Regular function with its own 'this' context
// const regularFunction = {
//   name: "Regular Function",
//   greet: function() {
//     console.log(`Hello from ${this.name}`);
//   }
// };

// // Arrow function inheriting 'this' from the surrounding scope
// const arrowFunction = {
//   name: "Arrow Function",
//   greet: () => {
//     console.log(`Hello from ${this.name}`); // undefined
//     console.log(`Hello from ${arrowFunction.name}`); // parent
//   }
// };

// regularFunction.greet(); // Output: Hello from Regular Function
// arrowFunction.greet(); // Output: Hello from undefined (lexical 'this' from surrounding scope)

//==============================================================

// const myName = "Sonny";

// function first() {
//   const age = 30;
//   if (age >= 30) {
//     const decade = 3;
//     var millennial = true;
//   }
//   function second() {
//     const job = "Student";
//     console.log(`${myName} is a ${age}-old ${job}`);
//   }
//   second();
// }

// first();

// const myName = "Sonny";

// function first() {
//   const age = 30;
//   if (age >= 30) {
//     const decade = 3;
//     var millennial = true; // Changed from var to const
//   }
//   function second() {
//     const job = "Student";
//     console.log(`${myName} is a ${age}-old ${job}`);
//     console.log(millennial); // Trying to access millennial outside its block
//   }
//   second();
// }

// first();

const a = "Sonny";
first();

function first() {
  const b = "Hello";
  second();

  function second() {
    const c = "Hi";
    third();
  }
}

function third() {
  const d = "Hey!";
  console.log(d + c + b + a);
}