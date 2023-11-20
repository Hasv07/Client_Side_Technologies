let inputString = prompt("Enter a string:");
let targetChar = prompt("Enter the character to count:");
let considerCase = confirm("Consider case sensitivity?");

function countOccurrences(str, char, caseSensitive) {
    let flags = caseSensitive ? "g" : "gi";
    let regex = new RegExp(char, flags);
    let matches = str.match(regex);
    return matches ? matches.length : 0;
}

let occurrences = countOccurrences(inputString, targetChar, considerCase);
alert(`Number of occurrences of '${targetChar}': ${occurrences}`);
