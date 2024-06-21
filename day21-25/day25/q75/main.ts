// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

function compoundOPerators() {
  let x = 4;
  console.log("Initial x:", x);
  console.log("After Addition:", (x += 2));
  console.log("After Subtraction:", (x -= 1));
  console.log("After Multiplication:", (x *= 3));
  console.log("After Division:", x / 2);
}
compoundOPerators();
