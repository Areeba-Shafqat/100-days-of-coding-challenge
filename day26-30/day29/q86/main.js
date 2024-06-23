"use strict";
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function CheckingString(text) {
    return text.includes("JavaScript");
}
console.log(CheckingString(`JavaScript is a dynamic programming language, and TypeScript is a static programming language`));
console.log(CheckingString(`I love coding`));
