let sum=0;
let number;
do{
    let userInput = prompt("Enter a number (enter 0 to exit):");

    number= Number(userInput);
    if(isNaN(number))alert('Enter a Valid number');
    else sum+=number

}while( isNaN(number) || sum<=100 && number )

document.write(`<h1>Sum of Numbers: ${sum}</h1>`);
