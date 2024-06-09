// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.

//version that passes
let alien_color: string = "green";
if (alien_color === "green") {
  console.log("You Just Earned 5 Points.");
}

//version that fails
alien_color = "yellow";
if (alien_color === "green") {
  // no output show because the condithion is false.
}
