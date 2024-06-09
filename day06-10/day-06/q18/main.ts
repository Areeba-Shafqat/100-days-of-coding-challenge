// 18. Seeing the World: Think of at least five places you’d like to visit.

let places: string[] = ["Turkey", "Dubai", "Pakistan", "Mekka", "London"];
console.log(`Original Order:`, places);

console.log(`\nAlphabetical Order:`, [...places].sort());
console.log(`Array Still In Its Original Order:`, places);

console.log(`\nReverse Alphabetical Order:`, [...places].sort().reverse());
console.log(`Array Still In Its Original Order:`, places);

console.log(`\nReverse Order:`, places.reverse());

console.log(
  `\nAgain Reversed Order So, Array Is In Its Original Order:`,
  places.reverse()
);

console.log(`\nAlphabetical Order:`, places.sort());

console.log(`\nReverse Alphabetical Order:`, places.reverse());
