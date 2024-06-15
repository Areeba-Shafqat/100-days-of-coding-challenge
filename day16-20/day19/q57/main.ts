// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = [88, 94, 72, 99, 53, 77];
let averageGrade =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
