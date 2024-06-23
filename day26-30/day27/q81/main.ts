// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  color: "black",
};

function Iteration(obj: object) {
  for (const property in obj) {
    console.log(`${property} : ${obj[property]}`);
  }
}
Iteration(car);
