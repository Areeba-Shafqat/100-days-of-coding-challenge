// Question 139: List three reserved words in JavaScript and create a valid use case for each.

// 1. typeOf. valid use case
const value: number = 66;
if (typeof value === "number") {
  console.log(`Value is a number`);
}

// 2. return.valid use case
function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(5, 6));

// 3. try-catch. valid use case
try {
  console.log("something went wrong");
} catch (error: any) {
  console.log("\nError catch,", error.message);
}
