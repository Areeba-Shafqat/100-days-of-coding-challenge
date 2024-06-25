// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysLeft() {
    var currentDate = new Date();
    var nextYear = new Date(currentDate.getFullYear() + 1, 0, 1);
    var timeDifference = nextYear.getTime() - currentDate.getTime();
    var daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
}
console.log(daysLeft() + " days left in the New Year.");
