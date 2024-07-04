// Question 135: Explain how you can format a JSON string with proper indentation for readability.
var obj = {
    name: "Areeba",
    age: 20,
    city: "Karachi",
};
console.log("JSON Object Indentation:", JSON.stringify(obj, null, 5));
