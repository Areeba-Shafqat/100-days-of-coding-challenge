// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "areeba"; // store a person name 
console.log(personName.toLowerCase()); // shows the name in all small letters
console.log(personName.toUpperCase()); //shows the name in all big letters
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()); //shows the name's First letter Big and the rest of all in small letters
