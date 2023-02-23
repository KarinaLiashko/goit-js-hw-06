const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

const bodyStyles = getComputedStyle(document.documentElement);
const bgColor = bodyStyles.getPropertyValue('background-color');
document.body.style.backgroundColor = bgColor;

buttonEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = bgColor;
}); 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


