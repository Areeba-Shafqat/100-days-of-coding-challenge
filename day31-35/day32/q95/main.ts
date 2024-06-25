// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

let arrnumbers: number[] = [1, 4, 10, 6, 8, 3, 11, 98, 40];
function greater(values: number[]) {
  return values.filter((value) => value >= 10);
}

console.log(greater(arrnumbers));
