function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "John Wick", age: 40 });
  }, 1000);
}
 
fetchUserMock((user) => {
  console.log("Got user:", user);
});


function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "John Wick", age: 40 }), 1000);
  });
}
 
async function showUser() {
  try {
    const user = await fetchUser();
    console.log("Got user:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}
 
showUser();