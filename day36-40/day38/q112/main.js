"use strict";
// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
Object.defineProperty(exports, "__esModule", { value: true });
const countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);
