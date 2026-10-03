const aboutMe = {
  name: "John Wick",
  age: 40,
  course: "BSCrim",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, age ${this.age} and my course was ${this.course}.`);
  }
};
 
aboutMe.hobby = "Walking my dog, Pencil Sketching";
aboutMe.introduce();

console.log(aboutMe.hobby)