// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function comaprision(text1: string, text2: string) {
  return text1.toLowerCase() === text2.toLowerCase()
    ? `Input Text is Same`
    : `Input Text is Not Same.`;
}
console.log(comaprision("hello", "Hello"));
console.log(comaprision("JavaScript", "TypeScript"));
