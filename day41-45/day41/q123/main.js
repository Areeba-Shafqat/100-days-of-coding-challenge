"use strict";
// Question 123: Create aa loop that iterates through a string and stops when it finds the first vowel.
let inputString = "Hwwwwllo World!";
function findVowel(str) {
    const vowel = "aeiouAEIOU";
    for (const char of str) {
        if (vowel.includes(char)) {
            console.log(`First vowel founded: ${char}`);
            break;
        }
        console.log(char); //print each character until a vowel is found
    }
}
findVowel(inputString);
