// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

const obj = {
  name: "Areeba",
  outerFunction: function () {
    console.log(this.name);
    const innerFunction = () => {
      console.log(this.name);
    };
    innerFunction();
  },
};
obj.outerFunction();
