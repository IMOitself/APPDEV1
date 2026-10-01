const values = [0, "", "hello", null, undefined, [], {}];
 
values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});

const username = "john_wick";
const password = "secret123";
 
const canLogIn = username !== "" && password !== "";
console.log(canLogIn); // true
 
const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
console.log(canWatch); // true
 
console.log("" || "default");        // "default" (first truthy)
console.log(username && "Welcome!");  // "Welcome!" (both truthy)
console.log(!canLogIn);                // false
