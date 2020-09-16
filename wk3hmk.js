const pizzaToppings = [
  "pepperoni",
  "cheese",
  "peppers",
  "garlic",

];


// for (let toppings of pizzaToppings) {
//     //  console.log(toppings);
// };

let greetCustomer = `Welcome to Pizza House, our toppings are: ${pizzaToppings}`
// console.log(greetCustomer);

const getPizzaOrder = {
  size: ["small", "medium", "large"],
  crust: ["thick", "thin"],
  toppings: [...pizzaToppings]

}

  console.log(`One ${getPizzaOrder.size[0]} ${getPizzaOrder.crust[1]} crust pizza with ${getPizzaOrder.toppings} coming UP!`);


const preparePizza = {
  size: getPizzaOrder.size,
  crust: getPizzaOrder.crust,
  toppings: getPizzaOrder.toppings
}

console.log(`Cooking Pizza`, preparePizza)

const servePizza = preparePizza(size, crust, toppings);

console.log()
