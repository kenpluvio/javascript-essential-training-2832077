/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];
//concatanate
backpackContents.join(" | ");
//add new items at the end
backpackContents.push("shift", 5);
//add new items at the beginning
backpackContents.unshift("shift", 5);
//remove beginning itmes
backpackContents.shift();
//remove last item
backpackContents.pop();
console.log(backpackContents);

// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

// let longItems = backpackContents.find(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log("longItems:", longItems);
