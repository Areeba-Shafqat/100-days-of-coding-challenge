// 37. Large Shirts: Default values in make_shirt().

function make_shirt(
  size: string = "Large",
  text: string = "I Love TypeScript"
) {
  console.log(`Makiing T-Shirt ${size} With A Message "${text}".`);
}
make_shirt(); // default large and message
make_shirt("Medium"); // default message, medium size
make_shirt("Small", "I Love Python."); // custom message, small size
