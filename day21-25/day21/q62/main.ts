// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface Student {
  name: string;
  age: number;
  class: string;
};
let student: Student = {
  name: "Areeba",
  age: 19,
  class: "Computer",
};
console.log(student);
