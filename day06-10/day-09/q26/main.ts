// 26. Alien Colors #2:  Choose a color for an alien, then write an if-else chain.

// Question 25
let alien_color: string = "green";

// version that runs if block
if (alien_color === "green") {
  console.log("You Just Earned 5 Points For Shooting The Alien.");
} else {
  console.log("You Just Earned 10 Points For Shooting The Alien.");
}

//version that runs else block
alien_color = "red";
if (alien_color === "green") {
  console.log("You Just Earned 5 Points For Shooting The Alien.");
} else {
  console.log("You Just Earned 10 Points For Shooting The Alien.");
}
