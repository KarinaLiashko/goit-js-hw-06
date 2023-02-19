const form = document.querySelector(".login-form");
const loginFormSubmitHeandler = (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };
  email === "" || password === ""
    ? alert("Please fill both fields")
    : console.log(formData);
  event.currentTarget.reset();
};
form.addEventListener("submit", loginFormSubmitHeandler);
