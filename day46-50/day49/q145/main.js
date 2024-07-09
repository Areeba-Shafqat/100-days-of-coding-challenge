// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function callbackFunction(callback, num1, num2) {
    callback(num1, num2);
}
function add(num1, num2) {
    console.log(num1 + num2);
}
callbackFunction(add, 8, 4);
