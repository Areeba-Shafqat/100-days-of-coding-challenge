// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function conversion(text) {
    var uppercase = text.toUpperCase();
    var lowercase = text.toLowerCase();
    console.log("Uppercase: ".concat(uppercase, "\nLowercase: ").concat(lowercase));
}
conversion("Abdullah");
