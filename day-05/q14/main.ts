// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests : string[] = ["Iqra" , "Aqsa" , "Fatima" , "Eisha"];
for (let i = 0; i < guests.length; i++){
    console.log(`Hello! dear ${guests[i]}, would you like to join me for dinner?`);    
}