// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// Method 1 (without Function)
let a: number = 5;
let b: number = 10;
let c: number;

console.log(`a value before swap: ${a}\nb value before swap: ${b}\n`);

c = a;
a = b;
b = c;
console.log(`a value after swap ${a}\nb value after swap: ${b}\n\n`);

// Method 2 (with Function)

function swapValue() {
  let a: number = 5,
    b = 10;
  console.log(`Befor swap: a=${a} b=${b}`);
  let temp = a;
  a = b;
  b = temp;
  console.log(`After swap: a=${a} b=${b}`);
}
swapValue();
