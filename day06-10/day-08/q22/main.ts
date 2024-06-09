// 22. Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

let guests: string[] = ["Ayesha", "Ifra", "Aqsa", "Zainab"];
console.log(guests[4]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
guests[4] = "Lubna"; // Correcting the error by accessing a valid index.
