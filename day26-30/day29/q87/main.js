// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function extractString(text) {
    return text.substring(1);
}
console.log(extractString("JavaScript is a dynamic language."));
var text = 'JavaScript is a dynamic programming language, and TypeScript is a static programming language';
console.log(text.substring(0));
console.log(text.substring(1));
console.log(text.substring(2));
console.log(text.substring(3));
console.log(text.substring(4));
console.log(text.substring(0, 1));
console.log(text.substring(1, 2));
console.log(text.substring(3, 3));
console.log(text.substring(5, 3));
