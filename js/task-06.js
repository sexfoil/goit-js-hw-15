const inputElement = document.querySelector("#validation-input");

const checkInputLength = () => {
    const dataLength = Number(inputElement.attributes.getNamedItem("data-length").value);
    const inputLength = inputElement.value.length;
    
    if (inputLength !== dataLength) {
        inputElement.classList.remove("valid");
        inputElement.classList.add("invalid");
    } else {
        inputElement.classList.remove("invalid");
        inputElement.classList.add("valid");
    }    
};

inputElement.addEventListener("blur", checkInputLength);