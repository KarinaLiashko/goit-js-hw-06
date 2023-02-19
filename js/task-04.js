const counterValue = {
    value: 0;

decrement() {
    return (this.value -= 1);
}

increment() {
    return (this.value += 1);
}
}

const valueEl = document.querySelector("#value");
const buttonDecrement = document.querySelector('[dtd-action="decrement"]');
const buttonIncrement = document.querySelector('[dtd-action="increment"]');

const onButtonDecrementClick = (event) => {
    console.log('-1');
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
}

const onButtonIncrementClick = (event) => {
    console.log('+1');
    counterValue.increment();
    valueEl.textContent = counterValue.value;
}

buttonDecrement.addEventListener("click", onButtonDecrementClick);
buttonIncrement.addEventListener("click", onButtonIncrementClick);