// 32. Checking Usernames: Ensure uniqueness in usernames.

let current_users: string[] = ["Abdullah", "Ali", "Amna", "Iqra", "Dua"];
let new_users: string[] = ["Fatima", "Esha", "Laiba", "Amna", "Ali"];
new_users.forEach((newUsers) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUsers.toLowerCase()
    )
  ) {
    console.log(
      `The Username ${newUsers} Is Not Available. Write A Different Username.`
    );
  } else {
    console.log(`The Username ${newUsers} Is Available.`);
  }
});
