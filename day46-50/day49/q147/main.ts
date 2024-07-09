// Question 147: Explain how to handle errors in a callback pattern.

function fetchData(
  callback: (error: Error | null, data?: string) => void
): void {
  const error = new Error(`Failed to fetch data`);
  const data: string = `Data fetched successfully`;

  if (Math.random() > 0.5) {
    callback(null, data);
  } else {
    callback(error);
  }
}

fetchData((error, data) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(data);
  }
});
