// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisible(number) {
    return number % 2 === 0 && number % 3 === 0
        ? "Value ".concat(number, " is divisible.")
        : "Value ".concat(number, " is not Divisible.");
}
console.log(isDivisible(12));
console.log(isDivisible(11));
