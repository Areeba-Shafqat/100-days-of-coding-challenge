// Question 144: Explain the use of the Promis.all() method with an example.

const promise1 = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 1 resolve`);
  }, 2000);
});

const promise2 = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolve `);
  }, 1000);
});

const promise3 = new Promise<string>((resolve, reject) => {
  const randoNumber: number = Math.random();
  if (randoNumber > 0.5) {
    resolve(`Promise 3 resolve`);
  } else {
    reject(new Error(`Promise reject`));
  }
});

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(`All promises resolved`);
  })
  .catch((error: any) => {
    console.error(`One of the promisse rejected`, error.message);
  });
