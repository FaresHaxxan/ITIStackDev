function login() {
    // Get user input for the username
    let username = prompt("Enter your username:");

    // Get user input for the password
    let password = prompt("Enter your password:");

    // Check if the entered username and password are correct
    if (username === "admin" && password === "421$$") {
        alert("Welcome! Login successful.");
    } else {
        let errorMessage = "Incorrect login details. ";
        
        if (username !== "admin") {
            errorMessage += "Username is incorrect. ";
        }

        if (password !== "421$$") {
            errorMessage += "Password is incorrect.";
        }

        alert(errorMessage);
    }
}

// Call the function to execute the code
login();
