// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function grading(grade: string) {
  switch (grade) {
    case "A-1":
    case "A-one":
    case "A-One":
      console.log("Outstanding!");
      break;
    case "A":
      console.log("Excellent!");
      break;
    case "B":
      console.log("Good!");
      break;
    case "C":
      console.log("Fair!");
      break;
    case "D":
      console.log("Poor!");
      break;
    case "F":
      console.log("Fail!");
      break;
    default:
      console.log("Invalid grade!");
      break;
  }
}

grading("A-1");
