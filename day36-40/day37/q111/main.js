// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizeGroup(age) {
    if (age <= 12) {
        return "According to your age You are a child!";
    }
    else if (age <= 19) {
        return "According to your age You are a teenager!";
    }
    else {
        return "According to your age You are an adult!";
    }
}
console.log(categorizeGroup(6));
console.log(categorizeGroup(15));
console.log(categorizeGroup(32));
