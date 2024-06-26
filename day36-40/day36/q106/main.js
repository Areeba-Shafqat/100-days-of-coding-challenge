// Question 106: Determine if a given year is a leap year using comparison operators.
function leapYear(year) {
    return year % 4 === 0
        ? "".concat(year, " is a leap year.")
        : "".concat(year, " is not a leap year.");
}
console.log(leapYear(2024));
console.log(leapYear(2023));
console.log(leapYear(2022));
