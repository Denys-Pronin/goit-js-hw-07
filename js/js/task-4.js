"use strict";

function formValidator() {
  const loginForm = document.querySelector(".login-form");
  const inputs = document.querySelectorAll("input");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {};
    let isEmpty = false;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isEmpty = true;
      }
    });

    for (let element of loginForm.elements) {
      formData[element.name] = element.value.trim();
    }

    if (isEmpty) {
      alert("All form fields must be filled in");
    } else {
      console.log(formData);
      loginForm.reset();
    }
  });
}

formValidator();
