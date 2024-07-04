// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var obj = {
    name: "Areeba",
    outerFunction: function () {
        var _this = this;
        console.log(this.name);
        var innerFunction = function () {
            console.log(_this.name);
        };
        innerFunction();
    },
};
obj.outerFunction();
