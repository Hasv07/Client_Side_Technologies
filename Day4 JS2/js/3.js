function findLargestWord(str) {
    let currentWord = "";
    let largestWord = "";

    for (let i=0;i<str.length ;i++) {
        if (str[i] !== " ") {
            currentWord += str[i];
        } else {
            if (currentWord.length > largestWord.length) {
                largestWord = currentWord;
            }
            currentWord = "";
        }
    }

    if (currentWord.length > largestWord.length) {
        largestWord = currentWord;
    }

    return largestWord;
}

let inputString = prompt("Enter a string:");

let largestWord = findLargestWord(inputString);
alert(`The largest word in the string is: ${largestWord}`);