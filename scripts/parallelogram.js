function calculateParallelogram() {
    const parallelogramBase = calculateArea('parallelogram-base');
    const parallelogramHeight = calculateArea('parallelogram-height');

    const area = parallelogramBase * parallelogramHeight;
    
    showAreaValue('parallelogram-area', area)
}