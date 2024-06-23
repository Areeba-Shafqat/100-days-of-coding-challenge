// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

function conversion(text: string): number {
  return parseFloat(text);
}
console.log(conversion("456.67"));
console.log(conversion("590"));
