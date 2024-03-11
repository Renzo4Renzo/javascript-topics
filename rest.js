/*
    REST (...)
    Gathers a list of values into an array.
    If used in the parameters of a function, it's called Rest Parameters.
    If used in assignments, it's called Rest Property and should be at the left side of the assignement.
    Should always be the last parameter. Only one rest is allowed.
*/

console.log("===============REST PATTERN============");
const [first, , ...others] = [1, 2, 3, 4, 5]; //NOTICE: You can leave an empty space if you don't want to use a variable
console.log("first:", first);
console.log("Others:", others);

console.log("\n===============REST IN OBJECTS============");
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
const { sat, ...weekdays } = openingHours;
console.log("sat:", sat);
console.log("weekdays:", weekdays);

console.log("\n===============REST PARAMETERS============");
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("Sum:", sum);
};

add(2, 3);
add(1, 5, 8);
add(4, 0, 5, -2, 9);

console.log("\n===============REST PARAMETERS AND REGULAR PARAMETERS============");
const orderPizza = (mainIngredient, ...otherIngredients) => {
  console.log("mainIngredient:", mainIngredient);
  console.log("otherIngredients:", otherIngredients);
};
orderPizza("Tuna");
orderPizza("Bread", "Onion", "Cheese");
