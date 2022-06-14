const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const pass1 = document.querySelector("#password")
const pass2 = document.querySelector("#password2")

const firstNameError = document.querySelector(".first-name-error")
const lastNameError = document.querySelector(".last-name-error")
const emailError = document.querySelector(".email-error")
const phoneError = document.querySelector(".phone-error")
const pass1Error = document.querySelector(".password-error")
const pass2Error = document.querySelector(".password2-error")


email.addEventListener("focusout", () => {
    if (email.validity.typeMismatch){
      emailError.textContent = 'Please enter in a valid Email';
      email.classList.add("error")
    }
});
email.addEventListener("input", () => {
  if (!email.validity.typeMismatch){
    emailError.textContent = '';
    email.classList.remove("error");
  }
});

phone.addEventListener("focusout", () => {
  if (phone.validity.patternMismatch){
    phoneError.textContent = 'Please enter a 10 digit number';
    phone.classList.add("error")
  }
});
phone.addEventListener("input", () => {
if (!phone.validity.patternMismatch){
  phoneError.textContent = '';
  phone.classList.remove("error");
}
});

pass1.addEventListener("focusout", () => {
    if (pass1.validity.patternMismatch){
      pass1Error.textContent = 'Password must be at least 8 characters and have at least a capital letter and a number';
      pass1.classList.add("error");
    }
});
pass1.addEventListener("input", () => {
  if (!pass1.validity.patternMismatch){
    pass1Error.textContent = '';
    pass1.classList.remove("error");
  }
});

pass2.addEventListener("focusout", () => {
  if (pass1.value != pass2.value ){
    pass2Error.textContent = 'Passwords do not match';
    pass2.classList.add("error");
  }
});
pass2.addEventListener("input", () => {
if (pass1.value == pass2.value){
  pass2Error.textContent = '';
  pass1.classList.remove("error");
}
});
