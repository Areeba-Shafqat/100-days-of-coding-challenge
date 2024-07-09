// Question 145: Create a function that accepts a callback and invokes it with some arguments.

type Callbacks = (arg1: number, arg2: number) => void;

function callbackFunction(callback: Callbacks, num1: number, num2: number) {
  callback(num1, num2);
}

function add(num1: number, num2: number) {
  console.log(num1 + num2);
}

callbackFunction(add, 8, 4);
