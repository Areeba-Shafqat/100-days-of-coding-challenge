// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var guests = ["Iqra", "Aqsa", "Fatima", "Eisha"];
for (var i = 0; i < guests.length; i++) {
    console.log("Hello! dear ".concat(guests[i], " would you like to join me for dinner?"));
}
console.log("\n");
// delete name store in a variable 
var canNotGo = "Eisha";
console.log("".concat(canNotGo, " due to some personal reason can't make it to dinner.\n"));
// update guest name
var newGuest = "Ansharah";
guests[guests.indexOf(canNotGo)] = newGuest;
// new set of invitation
for (var i = 0; i < guests.length; i++) {
    console.log("Hello! dear ".concat(guests[i], " would you like to join me for dinner?"));
}
