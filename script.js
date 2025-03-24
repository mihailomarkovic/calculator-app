"use strict";

// THEME SLIDER

const body = document.querySelector("body");
const btnSlider = document.querySelector(".theme__slider");
let currTheme = localStorage.getItem("theme");

function setDefaultTheme() {
  localStorage.setItem("theme", "1");
  currTheme = 1;
}

if (currTheme === null) {
  setDefaultTheme();
} else {
  body.classList.add(`theme_${currTheme}`);
}

const changeTheme = function () {
  if (currTheme < 3) {
    body.classList.remove(`theme_${currTheme}`);
    ++currTheme;
    body.classList.add(`theme_${currTheme}`);
  } else if (currTheme == 3) {
    body.classList.remove(`theme_${currTheme}`);
    setDefaultTheme();
    body.classList.add(`theme_${currTheme}`);
  }

  localStorage.setItem("theme", currTheme);
};

btnSlider.addEventListener("click", changeTheme);

// CALCULATOR

const buttons = document.querySelectorAll(".keypad__btn");
const input = document.getElementById("calc-input");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let currValue, pastValue, argument;
    const updateValues = function (past, arg) {
      pastValue = past;
      argument = arg;
    };

    switch (button.innerHTML) {
      case "del":
        input.value = "";
        break;
      case "+":
        updateValues(input.value, button.innerHTML);
        input.value = "";
        console.log(pastValue, argument);
        break;
      case "-":
        updateValues(input.value, button.innerHTML);
        input.value = "";
        console.log(pastValue, argument);
        break;
      case "x":
        updateValues(input.value, button.innerHTML);
        input.value = "";
        console.log(pastValue, argument);
        break;
      case "/":
        updateValues(input.value, button.innerHTML);
        input.value = "";
        console.log(pastValue, argument);
        break;
      case ".":
        input.value = "1";
        break;
      case "reset":
        input.value = "";
        break;
      case "=":
        input.value = "1";
        break;

      default:
        input.value += button.innerHTML;
    }
  });
});
