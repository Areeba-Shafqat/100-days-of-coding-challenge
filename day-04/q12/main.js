// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
var names = ["Iqra", "Aqsa", "Dua", "Muqaddus", "Khadija"];
for (var i = 0; i < names.length; i++) {
    console.log("".concat(names[i], " would you like to studies again in school?\n"));
}
