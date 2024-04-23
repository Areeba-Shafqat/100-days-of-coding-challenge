// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

let names : string[] = ["Iqra" , "Aqsa" , "Dua" , "Muqaddus" , "Khadija"];
for (let i = 0; i < names.length; i++){
    console.log(`${names[i]} would you like to studies again in school?\n`);    
}
