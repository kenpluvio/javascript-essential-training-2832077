import animal from "./animal.js";
import Backpack from "./Backpack.js";

const dog = new animal(true, "white", 0.88, 37, "female", 1);
const aapebag = new Backpack("aape", 1, "red", 5, 23, 23, true);

console.log("dog's color is ", dog.fur);
console.log("aapebag pocket number is ", aapebag.pocketNum);
