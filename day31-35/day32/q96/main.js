// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function calculateSum(numbers) {
    return numbers.reduce(function (num1, num2) { return num1 + num2; }, 0);
}
console.log(calculateSum(arr));
