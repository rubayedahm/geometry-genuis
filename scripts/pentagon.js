function calculatePentagon() {
    const pentagonP = calculateArea('pentagon-p');
    const pentagonB = calculateArea('pentagon-b');

    const area = 0.5 * pentagonP * pentagonB;
    
    showAreaValue('pentagon-area', area)
}