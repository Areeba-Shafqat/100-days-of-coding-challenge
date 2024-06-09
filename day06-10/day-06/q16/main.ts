// 16. More Guests:  You've found a bigger dinner table, so there's room for more guests.

let guestLists: string[] = ["Eisha", "Amna", "Laiba"];
console.log(
  "All Friends!!! \nThere's An Exciting News, I Found A Bigger Dinner Table.\n"
);
// adding more guests
guestLists.unshift("Fatima"); // beginning of array
guestLists.splice(3, 0, "Tayyaba"); // middle of array (due to index start from 0 so the name displayat 4th number)
guestLists.push("Aiman"); // end of array

// Sent invitations
guestLists.forEach((guests) => {
  console.log(
    `Hello! Dear ${guests}, Would You Like To Join Me Today For Dinner?`
  );
});
