const buttons = [
  {
    type: "operator",
    value: "%",
  },
  {
    type: "clearAll",
    value: "C",
  },
  {
    type: "backspace",
    value: "🔙",
  },
  {
    type: "operator",
    value: "/",
  },
  {
    type: "number",
    value: "7",
  },
  {
    type: "number",
    value: "8",
  },
  {
    type: "number",
    value: "9",
  },
  {
    type: "operator",
    value: "*",
  },
  {
    type: "number",
    value: "4",
  },
  {
    type: "number",
    value: "5",
  },
  {
    type: "number",
    value: "6",
  },
  {
    type: "operator",
    value: "-",
  },
  {
    type: "number",
    value: "1",
  },
  {
    type: "number",
    value: "2",
  },
  {
    type: "number",
    value: "3",
  },
  {
    type: "operator",
    value: "+",
  },
  {
    type: "number",
    value: "0",
  },
  {
    type: "dot",
    value: ".",
  },
  {
    type: "equal",
    value: "=",
  },
];

export function generateButtons() {
  const buttonsElement = document.querySelector(".buttons");
  buttons.forEach((button) => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = button.value;
    buttonElement.setAttribute("button-type", button.type);
    buttonsElement.appendChild(buttonElement);
  });
}
