// 38. Cities: Describing cities with a function.

function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city} Is In ${country}.`);
}
describe_city("Karcahi");
describe_city("Islamabad");
describe_city("Istanbul", "Turkey");
