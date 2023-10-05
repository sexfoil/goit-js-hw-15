const inputRangeElement = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const updateFontSize = () => {
    spanText.style.fontSize = inputRangeElement.value + "px";
};

updateFontSize(); // to get the appropriate initial font size

inputRangeElement.addEventListener("input", updateFontSize);
