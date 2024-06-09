// Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let myName : string = "\n\t Areeba \t\n";//store's the name with whitespace
console.log(myName);// shows the name with whitespace
console.log(myName.trim());// shows the name without whitespace
