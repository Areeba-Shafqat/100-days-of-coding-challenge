// 41. Magicians: Display magician names from an array.

let magician_name: string[] = ["Ali", "Zeeshan", "Faisal", "Hasan"];
function show_magicians(magician_name: string[]) {
  magician_name.forEach((magician) => {
    console.log(magician);
  });
}
show_magicians(magician_name);
