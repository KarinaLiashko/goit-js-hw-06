const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

function getRandomHexColor() {
  return (document.body.style.background = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`);
}

buttonEl.addEventListener("click", () => {
const color= getRandomHexColor()
  document.body.style.backgroundColor = color;
  textEl.textContent = color;
}); 







// bodyChangedColor.textContent = getRandomHexColor();
//   body.style.backgroundColor = bodyChangedColor.textContent;

// btnChangeColor.addEventListener("click", () => {
//     body.style.backgroundColor = getRandomHexColor()
//     bodyChangedColor.textContent = body.style.backgroundColor
// })



