// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

function findingStringPosition(text: string): number {
  return text.indexOf("code");
}
console.log(
  findingStringPosition(
    "Hello everyone today we will learn how to code in typescript."
  )
);
console.log(findingStringPosition("Learn to code with JavaScript"));
