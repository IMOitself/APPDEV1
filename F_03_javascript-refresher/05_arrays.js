let favoriteFoods = ["Boiled Peanuts", "Roasted Peanuts", "Peanut Butter"];
favoriteFoods.push("Cornicks"); // ["Boiled Peanuts", "Roasted Peanuts", "Peanut Butter", "Cornicks"];
favoriteFoods.shift(); // ["Roasted Peanuts", "Peanut Butter", "Cornicks"];

for (const food of favoriteFoods) {
  console.log(food);
}
 
const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);
