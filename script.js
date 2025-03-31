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
let currValue, pastValue, argument;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const updateValues = function (past, arg) {
      pastValue = past;
      argument = arg;
      input.value = "";
      currValue = "";
    };

    const calculate = function (curr, past, arg) {
      let resault = eval(`${past}${arg}${curr}`);
      pastValue = resault;
      if (Number.isInteger(resault)) return resault;
      else return resault.toFixed(2);
    };

    switch (button.innerHTML) {
      case "del":
        currValue = pastValue;
        input.value = "";
        break;
      case "+":
      case "-":
      case "/":
        if (!currValue) currValue = input.value;

        updateValues(currValue, button.innerHTML);
        break;
      case "x":
        if (!currValue) currValue = input.value;

        updateValues(currValue, "*");
        break;
      case ".":
        const tempValue = input.value;
        if (!tempValue.includes(".")) input.value += button.innerHTML;
        if (tempValue === "") input.value = "0.";
        break;
      case "reset":
        input.value = "";
        pastValue = "";
        argument = "";
        break;
      case "=":
        input.value = calculate(input.value, pastValue, argument);

        break;

      default:
        input.value += button.innerHTML;
        if (input.value === "0") input.value += ".";
    }
  });
});
