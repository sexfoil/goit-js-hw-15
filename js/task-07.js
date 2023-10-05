const inputRangeElement = document.querySelector("#font-size-control");

const updateFontSize = () => {
    const currentFontSize = inputRangeElement.value + "px";
    document.querySelector("#text").style.fontSize = currentFontSize;
};

inputRangeElement.addEventListener("input", updateFontSize);