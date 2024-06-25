// Question 99: Generate a date object representing your next birthday and log it to the console.
function findBirthday(month, day) {
    var today = new Date();
    var nextYear = today.getFullYear();
    var birthday = new Date(nextYear, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        birthday.setFullYear(nextYear + 1);
    }
    return birthday;
}
console.log("Next Birthday on: " + findBirthday(6, 8).toLocaleDateString());
