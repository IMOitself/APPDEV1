const students = [
  { name: "John", grade: 88 },
  { name: "Winston", grade: 95 },
  { name: "Caine", grade: 75 },
];
 
const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name));
 
const priya = students.find(s => s.name === "John");
console.log(priya);
 
console.log(students.some(s => s.grade < 60));
console.log(students.every(s => s.grade >= 60));
 
const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name));
