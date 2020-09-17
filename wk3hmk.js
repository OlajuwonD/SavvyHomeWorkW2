const pizzaToppings = [
  "pepperoni",
  "cheese",
  "peppers",
  "garlic",

];


// for (let toppings of pizzaToppings) {
//     //  console.log(toppings);
// };

function greetCustomer() {
let greeting = `Welcome to Pizza House, our toppings are: ${pizzaToppings}`
}
greetCustomer()

let customerOrder
function getPizzaOrder(size, crust, ...toppings) {
  size: ["small", "medium", "large"],
  crust: ["thick", "thin"],
  toppings: [...pizzaToppings]

}

  console.log(`One ${getPizzaOrder.size[0]} ${getPizzaOrder.crust[1]} crust pizza with ${getPizzaOrder.toppings} coming UP!`);


function preparePizza([orderSize, orderCrust, orderToppings]) {
  console.log("...your pizz is cooking...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  }
}

console.log(`Cooking Pizza`, preparePizza)

const servePizza = preparePizza(size, crust, toppings);

console.log()
