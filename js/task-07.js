const fontSizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeControl.addEventListener("input", function() {
    const fontSize = fontSizeControl.value + "px";
    textEl.style.fontSize = fontSize;
})