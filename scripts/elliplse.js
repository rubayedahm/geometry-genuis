function calculatEellipse() {
    const ellipseA = calculateArea('ellipse-a');
    const ellipseB = calculateArea('ellipse-b');

    const area = 3.14 * ellipseA * ellipseB;
    
    showAreaValue('ellipse-area', area)
}