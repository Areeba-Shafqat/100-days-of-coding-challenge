// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function conversion(text: string) {
  let uppercase: string = text.toUpperCase();
  let lowercase: string = text.toLowerCase();
  console.log(`Uppercase: ${uppercase}\nLowercase: ${lowercase}`);
}
conversion("Abdullah");
