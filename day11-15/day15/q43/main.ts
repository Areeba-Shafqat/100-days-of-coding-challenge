// 43. Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magician_name: string[] = ["Ali", "Zeeshan", "Faisal", "Hasan"];
function make_great(megician_name: string[]) {
  let greatMagicians = [];
  magician_name.forEach((magician) => {
    greatMagicians.push(`${magician}, The Great.`);
  });
  return greatMagicians;
}
function show_magicians(magician_name: string[]) {
  magician_name.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians = make_great(magician_name.slice()); // creates a new modified array
console.log("Original Magicians:");

show_magicians(magician_name); // shows original names

console.log("Great Magicians:");
show_magicians(greatMagicians); // shows modified names
