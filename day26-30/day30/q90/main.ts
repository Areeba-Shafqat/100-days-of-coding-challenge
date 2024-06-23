// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

function Checking(value: any): boolean {
  return isNaN(value);
}
console.log(Checking(87)); // Outputs: false, because 123 is a number
console.log(Checking("Good Morning!")); // Outputs: true, because "Good Morning!" isn't a number
