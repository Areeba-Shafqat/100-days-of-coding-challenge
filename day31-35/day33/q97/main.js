"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
const currentDate = new Date();
console.log(currentDate.toLocaleDateString('en-GB'));
console.log(currentDate.toLocaleDateString('en-US'));
function currentDatef() {
    const date = new Date();
    const day = String(date.getDay()).padStart(2, '0'); // Ensures the day is two digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(currentDatef());
