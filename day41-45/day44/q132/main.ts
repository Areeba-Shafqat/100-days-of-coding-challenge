// Question 132: Discuss the difference between default and named exports in JavaScript modules.

// Imorting named exports
import { add, sub } from "./addSub";
console.log(add(4, 7));
console.log(sub(7, 4));

// Importing a default export
import Calculator from "./calculator";
