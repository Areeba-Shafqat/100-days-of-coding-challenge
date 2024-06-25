// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function calculateSum(numbers: number[]): number {
  return numbers.reduce((num1, num2) => num1 + num2, 0);
}

console.log(calculateSum(arr));
