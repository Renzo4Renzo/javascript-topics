/*
  ASYNC EXAMPLES
  Calling Backend APIs
  Loading files
  Timers/Intervals
    
  CALLBACK
  A function passed as an argument to another function and executed after the first function completes its operation.
  Event listeners work by passing callbacks as parameters.
  No built-in mechanism for error handling.

  CALLBACK HELL
  Too many callbacks: code becomes deeply nested and difficult to read.
*/

//CALLBACK
console.log("\n============CALLBACK============");

function call(person) {
  console.log(`I'm calling ${person} while the pizza is being prepared...`);
}

function orderPizza(callback) {
  setTimeout(() => {
    const pizza = `PEPPERONI!`;
    callback(pizza);
  }, 1000);
}

function pizzaReady(pizza) {
  console.log(`Eat the pizza: ${pizza}`);
  console.log("\n============CALLBACK HELL============"); //NOTE: This is here only to show logs in the proper order
}

orderPizza(pizzaReady);
call("Ibeth");

//CALLBACK HELL
function callPizzaShop(callback) {
  setTimeout(() => {
    console.log("1. Pizza shop has answered...");
    callback(true);
  }, 1000);
}

function askOrder(success, callback) {
  if (success) {
    setTimeout(() => {
      console.log("2. Pizza guy has taken the order...");
      callback(true);
    }, 1000);
  } else {
    callback(false);
  }
}

function deliverPizza(success, callback) {
  if (success) {
    setTimeout(() => {
      console.log("3. Pizza has been delivered...");
      callback(true);
    }, 1000);
  } else {
    callback(false);
  }
}

function eatPizza(success, callback) {
  if (success) {
    setTimeout(() => {
      console.log("4. Pizza has been eaten...");
      callback(true);
    }, 1000);
  } else {
    callback(false);
  }
}

callPizzaShop((pizzaShopResponse) => {
  askOrder(pizzaShopResponse, (orderPlaced) => {
    deliverPizza(orderPlaced, (pizzaDelivered) => {
      eatPizza(pizzaDelivered, () => {
        console.log("CALLBACK HELL: ARROW FUNCTIONS!");
      });
    });
  });
});

// callPizzaShop(function (pizzaShopResponse) {
//   askOrder(pizzaShopResponse, function (orderPlaced) {
//     deliverPizza(orderPlaced, function (pizzaDelivered) {
//       eatPizza(pizzaDelivered, function () {
//         console.log("CALLBACK HELL: ANONYMOUS FUNCTIONS!");
//       });
//     });
//   });
// });
