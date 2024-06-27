// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

const student = new Map<number, string>();
student.set(1, "Amna");
student.set(2, "Aqsa");
student.set(3, "Anshara");
student.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}.`);
});
