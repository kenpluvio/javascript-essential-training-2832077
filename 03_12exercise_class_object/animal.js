/**
 * Create a animal object.
 */

class animal {
  constructor(
    //defines parameters:
    fur,
    color,
    height,
    weight,
    gender,
    age
  ) {
    this.fur = fur;
    this.color = color;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
    this.age = age;
  }
  transform(changecolor, changeage) {
    this.color = changecolor;
    this.age = changeage;
  }
}

export default animal;
// console.log("The animal object:", animal);
// console.log("This animal motion of habit is", animal.habit.motion);
// var year = "age";
// animal.transform("green", 13);
// console.log("The backpack pocket number is", animal[year]);
