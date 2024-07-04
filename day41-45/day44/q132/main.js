"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
// Imorting named exports
var addSub_1 = require("./addSub");
console.log((0, addSub_1.add)(4, 7));
console.log((0, addSub_1.sub)(7, 4));
