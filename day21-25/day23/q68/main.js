// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function decimalProduct(num1, num2) {
    return num1 * num2;
}
console.log(decimalProduct(0.1, 0.2).toFixed(2));
// make another function which work as it is as the above function works but logic is different 
function multiplyDecimals(num1, num2) {
    return Math.round(num1 * num2 * 100) / 100;
}
console.log(multiplyDecimals(0.1, 0.2));
