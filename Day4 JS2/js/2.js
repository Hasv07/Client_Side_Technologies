// Get user input
let inputString = prompt("Enter a string:");
let considerCase = confirm("Consider case sensitivity?");

function isPalindrome(str, caseSensitive) {
    let cleanedStr = caseSensitive ? str : str.toLowerCase();
    let reversedStr = "";

    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    return cleanedStr === reversedStr;
}

let palindromeResult = isPalindrome(inputString, considerCase);
alert(`The entered string is ${palindromeResult ? "" : "not "}a palindrome .`);
