const greet = name => "Hello, " + name; // implicit return
const square = n => n * n;               // implicit return
 
const sayHi = () => {
  console.log("Hi!");
};

console.log(greet("John Wick"));
console.log(square(7));
sayHi();