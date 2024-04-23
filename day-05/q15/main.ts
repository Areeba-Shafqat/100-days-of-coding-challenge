// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let guests : string[] = ["Iqra" , "Aqsa" , "Fatima" , "Eisha"];
for (let i = 0; i < guests.length; i++){
    console.log(`Hello! dear ${guests[i]} would you like to join me for dinner?`);    
}
console.log("\n");

// delete name store in a variable 
let canNotGo : string = "Eisha";
console.log(`${canNotGo} due to some personal reason can't make it to dinner.\n`);

// update guest name
let newGuest : string = "Ansharah";
guests[guests.indexOf(canNotGo)] = newGuest;

// new set of invitation
for (let i = 0; i< guests.length; i++){
    console.log(`Hello! dear ${guests[i]} would you like to join me for dinner?`);    
}