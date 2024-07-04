// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

const traditionalVsArrow = {
  text: "Abdullah",
  traditionalFunction: function () {
    console.log(`Traditinal Function: ${this.text}`);
  },
  arrowFunction: () => {
    console.log(`Arrow Function: ${this.text}`);
  },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
