// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
var rectengle = {
    length: 4,
    width: 5,
    calculate: function () {
        return this.length * this.width;
    },
};
console.log(rectengle.calculate());
