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
let currValue, pastValue, argument, resault;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const updateValues = function (past, arg) {
      pastValue = past;
      argument = arg;
    };

    // const calculate = function (curr, past, arg) {
    //   return curr;
    // };

    switch (button.innerHTML) {
      case "del":
        input.value = "";
        break;
      case "+":
      case "-":
      case "x":
      case "/":
        updateValues(input.value, button.innerHTML);
        input.value = "";
        console.log(pastValue, argument);
        break;
      case ".":
        input.value += button.innerHTML;
        break;
      case "reset":
        input.value = "";
        break;
      case "=":
        currValue = input.value;
        resault = `${pastValue}${argument}${currValue}`;
        input.value = eval(resault);

        break;

      default:
        input.value += button.innerHTML;
    }
  });
});
