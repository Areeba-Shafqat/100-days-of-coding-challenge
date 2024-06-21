// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

function combination(text: string, number: number): string {
  return text + number;
}
console.log(combination("Age: ", 30));
