function calculateTriangleArea() {
    // base input value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // height input value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    // calculate area
    const area = .5 * base * height;
    
    // show area value
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;

}