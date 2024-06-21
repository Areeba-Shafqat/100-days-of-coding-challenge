// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
// Method 1 (without Function)
var a = 5;
var b = 10;
var c;
console.log("a value before swap: ".concat(a, "\nb value before swap: ").concat(b, "\n"));
c = a;
a = b;
b = c;
console.log("a value after swap ".concat(a, "\nb value after swap: ").concat(b, "\n\n"));
// Method 2 (with Function)
function swapValue() {
    var a = 5, b = 10;
    console.log("Befor swap: a=".concat(a, " b=").concat(b));
    var temp = a;
    a = b;
    b = temp;
    console.log("After swap: a=".concat(a, " b=").concat(b));
}
swapValue();
