const items = [
  { name: "mobile", price: 10000 },
  { name: "earphones", price: 1000 },
  { name: "case", price: 500 },
  { name: "mouse", price: 2000 },
  { name: "screenProtector", price: 200 },
  { name: "holder", price: 150 },
];

const price = [100, 300, 500, 399, 489, 150];
// FILTER METHOD
const filtered = items.filter((item) => item.price > 1000);

// MAP method to get names

const itemNames = items.map((item) => item.name);

// FIND methid to get a specific item;
const specificName = items.find((item) => item.name === "mouse");

// FOREACH
items.forEach((item) => console.log(item.name));

// SOME method to check whether any element is presenmt according to the condition
const checkAnyOne = items.some((item) => item.name === "earphones");

//EVERY method checks for every element according o the given condition
const checkEveryElement = items.every((item) => item.price >= 1000);

// REDUCE method to get the value based on acuumulator and currentValue paramaters which reduces the values by storing it in the accumulator
const total = items.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);

// INCLUDES
const check = price.includes(500);
console.log(check);
