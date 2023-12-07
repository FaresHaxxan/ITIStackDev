// Constructor function for creating a 'Person' object
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Creating an instance of the Person object
  var person = new Person('John', 25);
  
  // Accessing the constructor property
  console.log(person.constructor);  // Output: [Function: Person]

  
  // Using the constructor property to check the type of an object
if (person.constructor === Person) {
    console.log('This is an instance of Person.');
  } else {
    console.log('This is not an instance of Person.');
  }
  