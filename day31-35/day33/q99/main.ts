// Question 99: Generate a date object representing your next birthday and log it to the console.

function findBirthday(month: number, day: number) {
  const today = new Date();
  const nextYear = today.getFullYear();
  const birthday = new Date(nextYear, month - 1, day); // Months are 0-indexed
  if (birthday < today) {
    birthday.setFullYear(nextYear + 1);
  }
  return birthday;
}
console.log("Next Birthday on: " + findBirthday(6,8 ).toLocaleDateString());
