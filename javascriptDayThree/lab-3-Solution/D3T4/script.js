// Phone book app
const contacts = []; // Array to store contacts

function addContact() {
    // Get user input for the name and phone number
    let contactName = prompt("Enter the name of the contact:");
    let contactPhoneNumber = prompt("Enter the phone number of the contact:");

    // Create a JavaScript object for the contact
    let contact = {
        name: contactName,
        phone: contactPhoneNumber
    };

    // Add the contact to the contacts array
    contacts.push(contact);

    // Inform the user that the contact has been added
    alert(`Contact ${contactName} with phone number ${contactPhoneNumber} added successfully.`);
}

function searchContact() {
    // Get user input for what to search for
    let searchTerm = prompt("Enter the name or phone number to search:");

    // Search in the contacts array for the entered term
    let foundContacts = contacts.filter(contact =>
        contact.name.includes(searchTerm) || contact.phone.includes(searchTerm)
    );

    // Display the details of the found contacts
    if (foundContacts.length > 0) {
        alert("Found contacts:");
        foundContacts.forEach(contact => {
            alert(`Name: ${contact.name}\nPhone: ${contact.phone}`);
        });
    } else {
        alert("No contacts found matching the search term.");
    }
}

// Main loop of the phone book app
while (true) {
    // Get user input for the operation
    let operation = prompt("Enter operation (add, search, or exit):");

    // Perform the corresponding operation
    switch (operation.toLowerCase()) {
        case "add":
            addContact();
            break;
        case "search":
            searchContact();
            break;
        case "exit":
            alert("Exiting the phone book app. Goodbye!");
            // Exit the loop and end the program
            throw new Error("Exit");
        default:
            alert("Invalid operation. Please enter add, search, or exit.");
            break;
    }
}
