// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "black",
};
function Iteration(obj) {
    for (var property in obj) {
        console.log("".concat(property, " : ").concat(obj[property]));
    }
}
Iteration(car);
