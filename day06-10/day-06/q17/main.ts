// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

// Question 16
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

// Question 17
// message thati invite only two people
console.log(
  "Unfortunately! I Have Space For Only Two Guests.So, I Can Only Invite Two Guests."
);

while (guestLists.length > 2) {
  let deleteGuests = guestLists.pop();
  console.log(`Sorry!\n${deleteGuests}, I Can't Invite You To Dinner.`);
}

guestLists.forEach((guests) => {
  console.log(`Hello! Dear ${guests}, You Are Still Invited Today For Dinner.`);
});

guestLists.splice(0, guestLists.length);
console.log(guestLists); // Remove the last two names
