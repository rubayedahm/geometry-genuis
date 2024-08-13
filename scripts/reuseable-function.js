function calculateArea(inputId) {
    const areaInput = document.getElementById(inputId);
    const areaText = areaInput.value;
    const areaFloat = parseFloat(areaText);

    return areaFloat;
}

// show are value
function showAreaValue(id, area) {
    const getAreaId = document.getElementById(id);
    getAreaId.innerText = area;

}