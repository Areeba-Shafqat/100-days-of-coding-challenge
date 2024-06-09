// 42. Great Magicians: Add "the Great" to magician names.

// Question 41
let magician_name: string[] = ["Ali", "Zeeshan", "Faisal", "Hasan"];
function show_magicians(magician_name: string[]) {
  magician_name.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(megician_name: string[]) {
  for (let i = 0; i < megician_name.length; i++) {
    megician_name[i] = megician_name[i] + " The Great.";
  }
}
make_great(magician_name); // modifies the original array
show_magicians(magician_name); // shows modified names
