function calculateRectangleArea() {
    const rectangleWidth = calculateArea('rectangle-width');
    const rectangleLength = calculateArea('rectangle-length');

    const area = rectangleWidth * rectangleLength;
    
    showAreaValue('rectangle-area', area)
}