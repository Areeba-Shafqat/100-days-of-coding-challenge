// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

async function add() {
  return 5 + 4;
}

const fetchData = async () => {
  const data = await add();
  console.log(await add());
};

fetchData();
