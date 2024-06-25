// Question 92: Write a function to remove the last element from an array and return the removed element.

let transport: string[] = ["car", "bus", "motorcycle", "bicycle"];

function removeElement<T>(arr: T[]): T | undefined {
  return arr.pop();
}
console.log(transport);
console.log(removeElement(transport));
console.log(transport);
