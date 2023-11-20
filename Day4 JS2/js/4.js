let name1 = prompt("Enter your name:");
let phoneNumber = prompt("Enter your phone number ");
let mobileNumber = prompt("Enter your mobile number ");
let email = prompt("Enter your email:");

let isValidName=/^[a-zA-Z]+/.test(name1);

let isValidPhoneNumber = /^\d{8}$/.test(phoneNumber);

let isValidMobileNumber = /^(010|011|012)\d{8}$/.test(mobileNumber);

let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


function displayMessage(message, color) {
    let styledMessage = `%c${message}`;
    let styles = `color: ${color}; font-size: 18px; font-weight: bold;`;
    console.log(styledMessage, styles);
}

if (isValidName && isValidPhoneNumber && isValidMobileNumber && isValidEmail) {
    const currentDate = new Date().toLocaleDateString();
    const welcomeMessage = `Welcome, ${name1}! Today is ${currentDate}.`;

    let colorChoice = prompt("Choose a color (red, green, or blue):");

    switch (colorChoice.toLowerCase()) {
        case 'red':
            displayMessage(welcomeMessage, 'red');
            break;
        case 'green':
            displayMessage(welcomeMessage, 'green');
            break;
        case 'blue':
            displayMessage(welcomeMessage, 'blue');
            break;
        default:
            alert("Invalid color choice. Please choose red, green, or blue.");
            break;
    }
} else {
    alert("Invalid input. Please check your name , phone number, mobile number, and email.");
}