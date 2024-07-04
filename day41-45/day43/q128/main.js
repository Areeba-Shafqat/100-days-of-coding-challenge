// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameter.
var product = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (total, number) { return total * number; }, 1);
};
console.log(product(4, 2, 3));
