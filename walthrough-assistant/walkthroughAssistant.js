import { isElementVisible } from "./utility";

export const WalkthroughAssistant = (elementIds) => {
  const elements = elementIds.map((id) => document.getElementById(id));

  let currentHighlightElementIndex = 0;

  const removeCurrentHighlight = () => {
    const currentHighlightedElement = document.querySelector(".highlight");
    if (currentHighlightedElement) {
      currentHighlightedElement.style.border = 0;
      currentHighlightedElement.style.transition = "all 0.3s ease-in-out";
      setTimeout(() => {
        currentHighlightedElement.remove();
      }, 300);
    }

    const currentPopoverElement = document.querySelector(".popover");
    if (currentPopoverElement) {
      currentPopoverElement.style.opacity = 0;
      currentPopoverElement.style.transition = "opacity 0.3s ease-in-out";
      setTimeout(() => {
        currentPopoverElement.remove();
      }, 300);
    }
  }

  const getHighlightElement = ({ top, left, width, height }) => {
    const div = document.createElement("div");
    div.classList.add("highlight");
    div.style = `
    position: absolute;
    top: ${top - 4}px;
    left: ${left - 4}px;
    z-index: -100;
    width: ${width + 8}px;
    height: ${height + 8}px;
    border-radius: 5px;
    `;

    setTimeout(() => {
      div.style.backgroundColor = "white";
      div.style.transition = "all 0.7s ease-in-out";
    }, 0);

    return div;
  };

  const getNavigationButtons = () => {
    const prevButton = document.createElement("button");
    prevButton.innerHTML = "Prev";
    prevButton.classList.add("navigation-button");
    prevButton.addEventListener("click", () => {
      if (currentHighlightElementIndex > 0) {
        currentHighlightElementIndex--;
      }

      HighlightElement(elements[currentHighlightElementIndex]);
    });

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "Next";
    nextButton.classList.add("navigation-button");
    nextButton.addEventListener("click", () => {
      if (currentHighlightElementIndex < elements.length - 1) {
        currentHighlightElementIndex++;
        HighlightElement(elements[currentHighlightElementIndex]);
      }else {
        document.body.style.background = "white";
        removeCurrentHighlight();
      }

    });

    prevButton.style = `
        opacity: 0;
        background-color: gray;
    `;
    nextButton.style = `
        opacity: 0;
        background-color: blue;
    `;

    setTimeout(() => {
      prevButton.style.opacity = 1;
      nextButton.style.opacity = 1;
      prevButton.style.transition = "opacity 0.7s ease-in-out";
      nextButton.style.transition = "opacity 0.7s ease-in-out";
    }, 0);

    if (currentHighlightElementIndex > 0) {
      prevButton.disabled = false;
    } else {
      prevButton.disabled = true;
    }

    if (currentHighlightElementIndex < elements.length - 1) {
      nextButton.innerText = "Next";
    } else {
      nextButton.innerText = "Finish";
    }

    const buttons = document.createElement("div");
    buttons.classList.add("navigation-buttons");
    buttons.appendChild(prevButton);
    buttons.appendChild(nextButton);
    return buttons;
  };

  const getPopoverElement = ({ top, left, width, height }) => {
    const currentPopoverElement = document.querySelector(".popover");
    if (currentPopoverElement) {
      currentPopoverElement.style.opacity = 0;
      currentPopoverElement.style.transition = "opacity 0.3s ease-in-out";
      setTimeout(() => {
        currentPopoverElement.remove();
      }, 300);
    }
    const div = document.createElement("div");
    div.classList.add("popover");
    div.style = `
    position: absolute;
    top: ${top + height + 10}px;
    left: ${left}px;
    z-index: 100;
    width: ${width}px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    `;

    setTimeout(() => {
      div.style.backgroundColor = "#FDF6E3";
      div.style.transition = "all 0.7s ease-in-out";
    }, 0);

    return div;
  };

  const scrollToElement = (element) => {
    if(isElementVisible(element)) return;
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    })
  };

  const HighlightElement = (element) => {
    // element
    document.body.style.background = "#747475";
    const elementRect = element.getBoundingClientRect();
    const parentElementRect = element.parentElement.getBoundingClientRect();
    removeCurrentHighlight();
    scrollToElement(element);
    const highlightElement = getHighlightElement({
      top: elementRect.top - parentElementRect.top,
      left: elementRect.left - parentElementRect.left,
      width: elementRect.width,
      height: elementRect.height,
    });

    const popoverElement = getPopoverElement({
      top: elementRect.top - parentElementRect.top,
      left: elementRect.left - parentElementRect.left,
      width: elementRect.width,
      height: elementRect.height,
    });

    const buttons = getNavigationButtons();

    popoverElement.appendChild(buttons);

    element.parentElement.appendChild(highlightElement);
    element.parentElement.appendChild(popoverElement);
  };

  HighlightElement(elements[currentHighlightElementIndex]);
};
