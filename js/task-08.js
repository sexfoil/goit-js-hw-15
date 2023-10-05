const formElement = document.querySelector(".login-form");

const submitForm = event => {
    event.preventDefault();
    const emailElement = formElement.elements.email;
    const passwordElement = formElement.elements.password;

    if (emailElement.value.length === 0 || passwordElement.value.length === 0) {
        alert("Email or Passwor can not be empty! Please fill these fields.");
    } else {
        const formData = {
            email: emailElement.value,
            password: passwordElement.value
        }
        console.log(formData);
        formElement.reset();
    }    
};

formElement.addEventListener("submit", submitForm);
