"use strict";

const body = document.querySelector("body");
const btnSlider = document.querySelector(".theme__slider");
let currTheme = localStorage.getItem("theme");

if (currTheme !== 1) {
  localStorage.setItem("theme", "1");
  currTheme = 1;
}
