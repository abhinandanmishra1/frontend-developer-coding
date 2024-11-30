export function elementsGenerator() {
    const appElement = document.querySelector("#app");
    const elementsElement = document.createElement("div");
    elementsElement.classList.add("elements");
    Array(15).fill(0).map((_, i) => {
        const element = document.createElement("div");
        element.classList.add("element");
        element.setAttribute("id", i+1);
        element.innerHTML = `${i+1}`;
        elementsElement.appendChild(element);
    })

    appElement.appendChild(elementsElement);
}
