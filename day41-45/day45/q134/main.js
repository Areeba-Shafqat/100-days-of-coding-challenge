// Question 134: Take a JSON string and parse it into a JavaScript object.
var obj = {
    name: "Areeba",
    age: 20,
    city: "Karachi",
};
var jsonObject = JSON.stringify(obj);
console.log("Object to JSON:", jsonObject);
var jsonToObject = JSON.parse(jsonObject);
console.log("JSON to Object:", jsonToObject);
