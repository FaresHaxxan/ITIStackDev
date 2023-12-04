// Prompt the user for three numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

// Function to find the largest of three numbers
function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

// Find the largest number
let largestNumber = findLargest(num1, num2, num3);

// Display the result
alert(`The largest number is: ${largestNumber}`);
