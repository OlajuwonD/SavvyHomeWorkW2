let pizzaPlace = "Slice of Heaven";
let numberOfToppings = 25;

console.log(typeof 25);
console.log(typeof "Slice of Heaven");

console.log(pizzaPlace);
console.log(numberOfToppings);

console.log(`Hello, Welcome to ${pizzaPlace}, where we have up to ${numberOfToppings} delicious toppings!`)

if (numberOfToppings <= 10) {
  console.log("Quality, not Quantity");
} else {
  console.log(`"A Whole lot of Pizza"`);
};

//bonus
for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// i = 1 , 1 % 2 = 1
