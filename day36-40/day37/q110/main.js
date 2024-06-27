// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function findGrade(num) {
    if (num >= 80) {
        console.log("Your Grade is 'A'.");
    }
    else if (num >= 70) {
        console.log("Your Grade is 'B'.");
    }
    else if (num >= 60) {
        console.log("Your Grade is 'C'.");
    }
    else if (num >= 50) {
        console.log("Your Grade is 'D'.");
    }
    else {
        console.log("Your Grade is 'F'.");
    }
}
findGrade(86);
findGrade(65);
findGrade(33);
