/**
 * Create a animal object.
 */

const animal = {
  fur: true,
  color: "yellow",
  height: 1.01,
  weight: 78,
  gender: "male",
  age: 0,
  transform: function (color, age) {
    this.color = color;
    this.age = age;
  },
  habit: {
    motion: "jump",
    play: true,
  },
};

console.log("The animal object:", animal);
console.log("This animal motion of habit is", animal.habit.motion);
var year = "age";
console.log("The backpack pocket number is", animal[year]);
