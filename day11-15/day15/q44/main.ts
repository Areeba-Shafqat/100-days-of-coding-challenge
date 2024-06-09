// 44. Sandwiches: Summarize sandwich orders with varying ingredients.

function ingredients(items: string[]) {
  console.log(`\nMaking A Sandwich With:`);
  items.forEach((element) => {
    console.log("-" + element);
  });
  console.log(`Enjoy Your Sandwich.\n`);
}

ingredients(["Avocado", "Olives", "Peanut Butter"]);
ingredients(["Chicken", "Cheese", "Mayo"]);
ingredients(["Lettuce", "Ham"]);
