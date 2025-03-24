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
  console.log(currTheme);

  localStorage.setItem("theme", currTheme);
};

btnSlider.addEventListener("click", changeTheme);

// CALCULATOR

const buttons = document.querySelectorAll(".keypad__btn");
const input = document.getElementById("calc-input");

const typeInScreen = function () {};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    input.value += button.innerHTML;
  });
});
