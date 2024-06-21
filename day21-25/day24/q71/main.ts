// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

// Using `let` for a variable that can be reassigned
let age: number = 20;
age = 22; // Works fine because `let` allows reassignment
console.log(age);

const myName = "Areeba";
try {
  // Trying to reassign a `const`-declared variable
 // myName = "Adeeba"; 
 // Above line will cause an error
} catch (error) {
  console.log("Cannot assign to 'myName' because it is a constant."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.



