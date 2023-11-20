let radius = parseFloat(prompt("Enter the radius of the circle:"));
let area = Math.PI * Math.pow(radius, 2);
alert(`The area of the circle with radius ${radius} is: ${area}`);

let inputValue = parseFloat(prompt("Enter a value for square root calculation:"));
let squareRoot = Math.sqrt(inputValue);
alert(`The square root of ${inputValue} is: ${squareRoot}`);

let angle = parseFloat(prompt("Enter an angle in degrees:"));
let angleInRadians = (angle * Math.PI) / 180;
let cosValue = Math.cos(angleInRadians);
alert(`The cosine value of ${angle} degrees is: ${cosValue}`);