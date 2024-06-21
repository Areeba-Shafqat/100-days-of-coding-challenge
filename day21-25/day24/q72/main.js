// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
var outOfBlock = "I am outside Of the House.";
var outside = "I am Outsider.";
{
    var innerOfBlock = "I am inside of the House.";
    var inside = "I am insider.";
    console.log(outOfBlock);
    console.log(outside);
    console.log(innerOfBlock);
    console.log(inside);
}
console.log(outOfBlock);
console.log(outside);
// console.log(innerOfBlock);
// console.log(inside);
