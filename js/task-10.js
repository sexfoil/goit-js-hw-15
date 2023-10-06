function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getDivElement(size, color) {
  const element = document.createElement("div");
  element.style.width = size;
  element.style.height = size;
  element.style.backgroundColor = color;
  return element;
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const size = (30 + 10 * i) + "px";
    const color = getRandomHexColor();
    document.querySelector("#boxes").append(getDivElement(size, color));
  }  
};

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
};


const createButtonElement = document.querySelector("button[data-create]");
const destroyButtonElement = document.querySelector("button[data-destroy]");

const createElements = () => {
  if (document.querySelector("#boxes").childElementCount === 0) {
    const amount = document.querySelector("#controls").firstElementChild.value;
    if (amount.length !== 0) {
      createBoxes(Number(amount));
    }  
  }  
};

const destroyElements = () => destroyBoxes();


createButtonElement.addEventListener("click", createElements);
destroyButtonElement.addEventListener("click", destroyElements);
