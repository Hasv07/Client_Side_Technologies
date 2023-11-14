let x,y,z;

do{
    alert('Please enter valid numeric values for x , y , z.');

    x = prompt("Enter the value for x:");
    y = prompt("Enter the value for y:");
    z = prompt("Enter the value for z:");

    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    
}while (isNaN(x) || isNaN(y) || isNaN(z)) 

if (x % y === 0 && x % z !== 0) {
    document.write(`<h1>${x} is divisible by ${y} only.</h1>`);
} else if (x % z === 0 && x % y !== 0) {
    document.write(`<h1>${x} is divisible by ${z} only.</h1>`);
} else if (x % y === 0 && x % z === 0) {
    document.write(`<h1>${x} is divisible by both ${y} and ${z}.</h1>`);
} else {
    document.write(`<h1>${x} is not divisible by either ${y} or ${z}.</h1>`);
}