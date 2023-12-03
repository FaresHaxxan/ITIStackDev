  // Ask the user to enter his first name
  var firstName = prompt("Enter your first name:");

  // Ask the user to enter his last name
  var lastName = prompt("Enter your last name:");

  // Confirm the full name
  var fullName = firstName + " " + lastName;
  var confirmMessage = "Is your full name " + fullName + "?";
  var isConfirmed = confirm(confirmMessage);

  // Ask the user to enter his birth year
  var birthYear = parseInt(prompt("Enter your birth year:"));

  // Calculate the age
  var currentYear = 2023;
  var age = currentYear - birthYear;

  // Welcome the user using his full name and age
  var confirmMessage = "Welcome " + fullName + " you are " + age + " years old.";
  var isalerted = alert(confirmMessage);