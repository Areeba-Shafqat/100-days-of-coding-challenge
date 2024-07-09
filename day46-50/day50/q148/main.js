// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
function delay() {
    setTimeout(function () {
        console.log("Code execute after 2 seconds.");
    }, 2000);
}
delay();
console.log("this line is after function but executed before function.");
