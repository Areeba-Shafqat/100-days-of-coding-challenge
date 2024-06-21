// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shape = {
  kind: "circle" | "rectangle";
  radius?: number;
  height?: number;
  width?: number;
};
let circle: Shape = {
  kind: "circle",
  radius: 4,
};
let rectangle: Shape = {
  kind: "rectangle",
  height: 10,
  width: 20,
};
console.log(circle);
console.log(rectangle);
