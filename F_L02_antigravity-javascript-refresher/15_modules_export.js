const userInfo = { name: "John Wick", age: 40 };
 
function greet() {
  return "Hello from module!";
}
 
export default greet;
export { userInfo };