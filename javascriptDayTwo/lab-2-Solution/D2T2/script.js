// Prompt the user for a string
let userInput = prompt("Enter a string:");

// Initialize variables to store vowel counts
let aCount = 0;
let eCount = 0;
let oCount = 0;
let uCount = 0;
let iCount = 0;

// Convert the input string to lowercase for case-insensitive matching
let lowercaseInput = userInput.toLowerCase();

// Loop through each character in the string and count vowels
for (let char of lowercaseInput) {
    switch (char) {
        case 'a':
            aCount++;
            break;
        case 'e':
            eCount++;
            break;
        case 'o':
            oCount++;
            break;
        case 'u':
            uCount++;
            break;
        case 'i':
            iCount++;
            break;
    }
}

// Display the vowel counts
alert(`a=${aCount} e=${eCount} o=${oCount} u=${uCount} i=${iCount}`);
