/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);
collection[collection.length] = "add new one";
collection[9] = "add one with specific number";
console.log(collection.length);
console.log(collection[1]);
