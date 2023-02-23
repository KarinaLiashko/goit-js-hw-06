const input = document.querySelector('#validation-input');
const inputLength = document.getAttribute(input[dataset - length]);

function onInputBlur(e) {
  const contentOfInput = e.currentTarget.value.trim();
  input.dataset.length = contentOfInput.length;
  if (inputLength) {
    input.classList.remove('invalid');
    return input.classList.add('valid');
  }
   input.classList.remove('valid');
   return input.classList.add('invalid');
  }
input.addEventListener('blur', onInputBlur);  