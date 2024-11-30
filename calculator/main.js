import "./style.css";

import { isOperatorByValue, validations } from "./validate.js";

import { generateButtons } from "./buttonsGenerator.js";

const buildCalculator = () => {
  const buttonsElement = document.querySelector(".buttons");

  buttonsElement.addEventListener("click", (e) => {
    const buttonType = e.target.getAttribute("button-type");
    const inputElement = document.getElementById("expression");

    if (buttonType === "clearAll") {
      inputElement.value = "0";
    } else if (buttonType === "backspace") {
      inputElement.value = inputElement.value.slice(0, -1);
      if (inputElement.value.length === 0) {
        inputElement.value = "0";
      }
    } else if (buttonType === "equal") {
      const result = eval(inputElement.value);
      if (!isNaN(result)) {
        inputElement.value = result;
      }
    } else if (buttonType === "number") {
      if (inputElement.value === "0") {
        inputElement.value = "";
      }
      inputElement.value += e.target.textContent;
    } else if (buttonType === "operator") {
      if (
        isOperatorByValue(inputElement.value.slice(-1)) ||
        inputElement.value === "0" ||
        inputElement.value.length === 0
      ) {
        return;
      }
      inputElement.value += e.target.textContent;
    } else if (buttonType === "dot") {
      if (
        inputElement.value.includes(".") ||
        isOperatorByValue(inputElement.value.slice(-1))
      ) {
        return;
      }
      inputElement.value += e.target.textContent;
    }
  });
};

generateButtons();
buildCalculator();
validations();
