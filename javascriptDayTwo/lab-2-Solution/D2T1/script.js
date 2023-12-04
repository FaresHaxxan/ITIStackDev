while (true) {
    // Prompt the user for age
    let ageInput = prompt("Enter your age:");

    // Check if the user clicked cancel or entered a non-numeric value
    if (ageInput === null || isNaN(ageInput)) {
        alert("Invalid input. Please enter a valid age.");
        continue;
    }

    // Parse the age as a number
    let age = parseInt(ageInput);

    // Check if the age is positive
    if (age <= 0) {
        alert("Invalid input. Please enter a positive age.");
        continue;
    }

    // Categorize the user based on age
    let status = "";
    if (age >= 1 && age <= 10) {
        status = "Child";
    } else if (age >= 11 && age <= 18) {
        status = "Teenager";
    } else if (age >= 19 && age <= 50) {
        status = "Grown up";
    } else {
        status = "Old";
    }

    // Display the user's status
    alert(`Your status: ${status}`);

    // Ask the user if they want to enter another age
    let anotherAge = confirm("Do you want to enter another age?");
    if (!anotherAge) {
        break; // Exit the loop if the user clicks cancel
    }
}
