// 43. Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var magician_name = ["Ali", "Zeeshan", "Faisal", "Hasan"];
function make_great(megician_name) {
    var greatMagicians = [];
    magician_name.forEach(function (magician) {
        greatMagicians.push("".concat(magician, ", The Great."));
    });
    return greatMagicians;
}
function show_magicians(magician_name) {
    magician_name.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(magician_name.slice()); // creates a new modified array
console.log("Original Magicians:");
show_magicians(magician_name); // shows original names
console.log("Great Magicians:");
show_magicians(greatMagicians); // shows modified names
