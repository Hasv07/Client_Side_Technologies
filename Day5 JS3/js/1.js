let userArray =Array.from({ length: 5 }, 
    (_, i) => parseFloat(prompt(`Enter value ${i + 1}:`)));

console.log("Original Array:", userArray);
console.log("Descending Order:",userArray.sort((a, b) => b - a));
console.log("Ascending Order:", userArray.sort((a, b) => a - b));