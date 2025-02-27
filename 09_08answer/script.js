/**
 * Solution: Create an event listener
 * - Find the two elements with the .backpack__strap class.
 * - Create a function to output the strap length form.
 * - Iterate through each item with the .backpack__strap class.
 * - Capture the value of the data-side attribute to indicate the strap side.
 * - Create a form element.
 * - Populate the form with an input and a submit button.
 * - Add event listener to each of the strap length forms.
 * - Update strap length value with value submitted from form.
 */
import backpackObjectArray from "./components/data.js";

/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function (event, button, newArg) {
  console.log(event);
  console.log(newArg);

  // Find the current backpack object in backpackObjectArray
  let backpackObject = backpackObjectArray.find(
    ({ id }) => id === button.parentElement.id
  );

  // Toggle lidOpen status
  backpackObject.lidOpen == true
    ? (backpackObject.lidOpen = false)
    : (backpackObject.lidOpen = true);

  // Toggle button text
  button.innerText == "Open lid"
    ? (button.innerText = "Close lid")
    : (button.innerText = "Open lid");

  // Set visible property status text
  let status = button.parentElement.querySelector(".backpack__lid span");
  status.innerText == "closed"
    ? (status.innerText = "open")
    : (status.innerText = "closed");
};

/**
 * Strap length functionality
 */
const newStrapLength = (strapArray) => {
  // Loop through each element on the list
  strapArray.forEach((listElement) => {
    // Get what side we are working with
    let side = listElement.getAttribute("data-side");

    // Create a new form element
    const lengthForm = document.createElement("form");
    lengthForm.classList.add(`${side}length`);

    // Populate form with an input and a button
    lengthForm.innerHTML = `
      <input type="number" name="${side}Length" placeholder="New ${side} length">
      <button>Update</button>
    `;

    // Add event listener to the form submit action
    lengthForm.addEventListener("submit", (e) => {
      // Stop form from reloading the page
      e.preventDefault();

      // Get the value from the form input
      let newValue = lengthForm.querySelector("input").value;

      // Set the value of the field
      listElement.querySelector("span").innerHTML = `${newValue} inches`;

      // Clear the form input
      lengthForm.querySelector("input").value = "";
    });

    // Add form to the end of the list element
    listElement.append(lengthForm);
  });
};

const backpackList = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="feature backpack__strap" data-side="left">Left strap length: <span>${
        backpack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap" data-side="right">Right strap length: <span>${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>
  `;

  // Find the two list items with the .backpack__strap class
  let strapLengths = backpackArticle.querySelectorAll(".backpack__strap");

  // Call the newStrapLength() function and pass on the strapLengths node list.
  newStrapLength(strapLengths);

  let button = backpackArticle.querySelector(".lid-toggle");
  let newArg = "The argument I want to pass to the callback function!";

  // Add event listener
  button.addEventListener("click", (event) => {
    lidToggle(event, button, newArg);
  });

  return backpackArticle;
});

// Append each backpack item to the main
const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});

// JavaScript code​​​​​​‌​‌​‌​​​​​​​‌​​‌​​‌​‌​​‌​ below
// Change these values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

function updatePage(document) {
  // Your code goes here.
  const thespan = document.querySelectorAll(".value");
  function updateSpan(form) {
    switch (form.id) {
      case "update-name":
        thespan[0].innerHTML = document.querySelector("#name-input").value;
        break;
      case "update-description":
        thespan[1].innerHTML = document.querySelector(
          "#description-input"
        ).value;
        break;
      case "update-color":
        thespan[2].innerHTML = document.querySelector("#color-input").value;
        break;
      case "update-volume":
        thespan[3].innerHTML = document.querySelector("#volume-input").value;
        break;
    }
  }
  const inputdiv = document.querySelectorAll("form");
  inputdiv.forEach((forms) => {
    forms.addEventListener("submit", () => updateSpan(forms), false);
  });
}
