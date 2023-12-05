function performOperation() {
    // Get user input for the first number
    let firstNumber = parseFloat(prompt("Enter the first number:"));

    // Get user input for the operation
    let operation = prompt("Enter the operation (sum, multiply, subtract, divide):");

    // Get user input for the second number
    let secondNumber = parseFloat(prompt("Enter the second number:"));

    // Perform the operation based on user input
    let result;
    switch (operation.toLowerCase()) {
        case "sum":
            result = firstNumber + secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "divide":
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                alert("Error: Division by zero is not allowed.");
                return;
            }
            break;
        default:
            alert("Invalid operation. Please enter sum, multiply, subtract, or divide.");
            return;
    }

    // Display the result to the user
    alert(`Result of ${operation} ${firstNumber} and ${secondNumber} is: ${result}`);
}

// Call the function to execute the code
performOperation();
