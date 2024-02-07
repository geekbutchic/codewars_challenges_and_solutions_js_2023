// Regular function with its own 'this' context
const regularFunction = {
  name: "Regular Function",
  greet: function() {
    console.log(`Hello from ${this.name}`);
  }
};

// Arrow function inheriting 'this' from the surrounding scope
const arrowFunction = {
  name: "Arrow Function",
  greet: () => {
    console.log(`Hello from ${this.name}`); // undefined
    console.log(`Hello from ${arrowFunction.name}`); // parent
  }
};

regularFunction.greet(); // Output: Hello from Regular Function
arrowFunction.greet(); // Output: Hello from undefined (lexical 'this' from surrounding scope)
