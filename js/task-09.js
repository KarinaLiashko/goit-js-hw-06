const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

buttonEl.addEventListener("click", getRandomHexColor); 

function getRandomHexColor() {
  return (document.body.style.background = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`);
}

bodyChangedColor.textContent = getRandomHexColor();
  body.style.backgroundColor = bodyChangedColor.textContent;





