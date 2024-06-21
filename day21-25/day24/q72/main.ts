// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

let outOfBlock: string = "I am outside Of the House.";
const outside: string = "I am Outsider.";
{
  let innerOfBlock: string = "I am inside of the House.";
  const inside: string = "I am insider.";

  console.log(outOfBlock);
  console.log(outside);
  console.log(innerOfBlock);
  console.log(inside);
}
console.log(outOfBlock);
console.log(outside);
// console.log(innerOfBlock);
// console.log(inside);
