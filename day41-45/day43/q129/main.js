// Question 129: Explain how this bahaves differently in arrow functions compared to traditional functions.
var _this = this;
var traditionalVsArrow = {
    text: "Abdullah",
    traditionalFunction: function () {
        console.log("Traditinal Function: ".concat(this.text));
    },
    arrowFunction: function () {
        console.log("Arrow Function: ".concat(_this.text));
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
