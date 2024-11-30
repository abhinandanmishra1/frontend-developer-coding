import "./style.css";

const addSpeedOptions = () => {
  const speedSelectElement = document.getElementById("speed");

  for (let i = 100; i < 1000; i += 100) {
    const optionElement = document.createElement("option");
    optionElement.value = i;
    optionElement.textContent = i;
    speedSelectElement.appendChild(optionElement);
  }
};

const addRandomWords = () => {
  const textareaElement = document.querySelector("#text");
  textareaElement.innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
};

const startTyping = () => {
  const startButtonElement = document.querySelector("#start");
  let index = 0;
  let intervalId = 0;

  startButtonElement.addEventListener("click", () => {
    const textareaElement = document.querySelector("#text");
    const typingEffectElement = document.querySelector(".typing-effect");
    const text = textareaElement.value;
    const length = text.length;
  
    if(startButtonElement.innerText === "Start" || startButtonElement.innerText === "Continue") {
      startButtonElement.innerText = "Pause";
      startButtonElement.style.backgroundColor = "red"
      intervalId = setInterval(() => {
        typingEffectElement.innerHTML += text[index];
        index++;
    
        if (index === length) {
          clearInterval(intervalId);
          startButtonElement.innerText = "Start";
          startButtonElement.style.backgroundColor = "green"
          index = 0;
        }
      }, 1000 - document.getElementById("speed").value);
    }else {
      startButtonElement.innerText = "Continue";
      startButtonElement.style.backgroundColor = "orange"
      clearInterval(intervalId);
    }
  });

};
addRandomWords();
startTyping();
addSpeedOptions();
