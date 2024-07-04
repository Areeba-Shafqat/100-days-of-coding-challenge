// Question 134: Take a JSON string and parse it into a JavaScript object.

const obj = {
  name: "Areeba",
  age: 20,
  city: "Karachi",
};
const jsonObject = JSON.stringify(obj);
console.log("Object to JSON:", jsonObject);
const jsonToObject = JSON.parse(jsonObject);
console.log("JSON to Object:", jsonToObject);
