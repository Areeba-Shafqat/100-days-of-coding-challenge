// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
var stringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringArray);
