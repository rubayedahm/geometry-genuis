function calculateRhombus() {
    const rhombusD1 = calculateArea('rhombus-d1');
    const rhombusD2 = calculateArea('rhombus-d2');

    const area = 0.5 * rhombusD1 * rhombusD2;
    
    showAreaValue('rhombus-area', area)
}