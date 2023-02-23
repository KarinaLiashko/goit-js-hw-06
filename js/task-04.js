const counter = document.getElementById('counter');
const valueSpan = counter.querySelector('#value');
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

let counterValue = 0;
valueSpan.textContent = counterValue;

incrementButton.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});
