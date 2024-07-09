// Question 142: Create a Promise that resolves with "Hello,World" after 2 seconds.

const createPromise = new Promise<string>((resolve) => {
  setTimeout(() => {
    console.log("Hello, World");
  }, 2000);
});

createPromise.then((message) => console.log(message));
