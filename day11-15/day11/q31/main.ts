// 31. No Users:  Ensure your user list isn’t empty.

let userNames: string[] = ["Abdullah", "Ali", "Amna", "Iqra"];
if (userNames.length === 0) {
  console.log("We Need To Find Some Users.");
} else {
  userNames = [];
  console.log("All User Names Have Been Remove. " + userNames.length);
}
