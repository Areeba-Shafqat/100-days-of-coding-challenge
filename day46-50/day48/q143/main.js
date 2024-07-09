"use strict";
// Question 143: Show how to use the .then() and .catch() mthods to handle Promise resolution and rejection.
const myPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve(`Promise resolved`);
    }
    else {
        reject(new Error(`Promise reject`));
    }
});
myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(`Error`, error.message);
});
