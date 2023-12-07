function performLogin() {
    // Get user input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Create login object
    var login = {
        username: username,
        password: password
    };

    // Check login credentials
    if (login.username === "admin" && login.password === "123") {
        showMessage("Welcome");
    } else {
        showMessage("Not registered");
    }
}

const btn = document.getElementById("btn");
btn.addEventListener('click',performLogin);

function showMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
}
