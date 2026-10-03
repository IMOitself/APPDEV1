const person = { name: "John Wick", age: 40 };
const { name, age } = person;
console.log(name, age); 
 
const hobbies = ["coding", "watching movies", "playing minecraft"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
 
function printName({ name }) {
  console.log(name);
}

printName(person);