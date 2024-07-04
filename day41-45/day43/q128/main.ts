// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameter.

const product = (...number: number[]) =>
  number.reduce((total, number) => total * number, 1);
console.log(product(4, 2, 3));
