"use strict";
// Question 131: Create two modules; one that exports a class, and another that import the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
var areeba = new class_1.Person("Areeba");
areeba.greet();
