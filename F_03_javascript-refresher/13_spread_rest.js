const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [ 1, 2, 3, 4, 5 ]
 
const user = { name: "John Wick", age: 40 };
const newUser = { ...user, email: "john@wick.com" };
console.log(newUser); // { name: 'John Wick', age: 40, email: 'john@wick.com' }
 
function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
