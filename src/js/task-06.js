const inputElement = document.querySelector("#validation-input");

const checkInputLength = () => {
    const dataLength = Number(inputElement.attributes.getNamedItem("data-length").value);
    const inputLength = String(inputElement.value).length;
    inputElement.classList.add(inputLength < dataLength ? "invalid" : "valid");
};

inputElement.addEventListener("blur", checkInputLength);