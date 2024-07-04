// Question 124: Create a functin inside an object that returns the object's own name property using the this keyword.

const obj = {
  name: "Abdullah",
  personName: function () {
    return this.name;
  },
};
console.log(obj.personName());
