// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

const countries = new Map<string, string>();

countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
countries.set("USA", "Washington, D.C.");
function logCapital(countries: Map<string, string>): void {
  if (countries.has("Canada")) {
    console.log(`The Cpital of Canada is ${countries.get("Canada")}`);
  } else {
    console.log("Canada is not in the Map.");
  }
}
logCapital(countries);
