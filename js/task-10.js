
  // const boxesParent = document.querySelector("#boxes");

  const controls = document.querySelector("#controls");
  const boxes = document.querySelector("#boxes");
  const button = document.querySelectorAll("button[type='button']");
  const divEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  amount = controls.firstElementChild.value;

  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = 20 + i * 10 + "px";
    newBox.style.height = 20 + i * 10 + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.insertAdjacentElement('beforeend', newBox);
  };
};

const clearBoxes = () => divEl.replaceChildren();

button[0].addEventListener("click", createBoxes);
button[1].addEventListener("click", clearBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
