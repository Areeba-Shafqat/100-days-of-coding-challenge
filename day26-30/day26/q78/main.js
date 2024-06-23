// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function declarations(number) {
    return number * number;
}
var expressions = function (number) {
    return number * number;
};
declarations(5);
console.log(expressions(5));
