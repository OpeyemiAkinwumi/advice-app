"use strict";

const id = document.querySelector(".id");
const advice = document.querySelector("h1");
const button = document.querySelector(".dice");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((req) => req.json())
    .then((data) => {
      //   console.log(data);
      id.textContent = data.slip.id;
      advice.textContent = data.slip.advice;
    });
});
