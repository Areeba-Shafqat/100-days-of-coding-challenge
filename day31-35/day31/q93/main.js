// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log(fruits.indexOf("Banana"));
fruits[fruits.indexOf("Banana")] = "Mango";
console.log(fruits);
