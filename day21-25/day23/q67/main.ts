// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

function bothTypes(valNumber: number, valString: string): number {
  return valNumber + Number(valString);
}
console.log(bothTypes(3, "5")); // Shows 8
// The string "5" is turned into the number 5, and then added to 3.
