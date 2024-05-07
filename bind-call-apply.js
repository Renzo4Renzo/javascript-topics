/*
  The methods "bind", "call" and "apply" can be used to set manually the value of THIS:
    - Bind creates a new function, but it does not execute it (it could be executed later).
    - Call and apply invoke inmediately the method.
    All three methods allow you send an an optional list of arguments: 
    - For Bind and Call, you send them separated by commas.
    - For Apply, you send them in an array.
    All three methods return you the global object when "null" is passed as context. 
    You can't chain any of these methods.
*/

console.log("====================BIND, CALL AND APPLY================");
function sayMyName() {
  return `I am ${this.name}`;
}

function greeting(language) {
  if (language === "FRA") return `Salut ${this.name}!`;
  else return `Hello ${this.name}!`;
}

const me2 = {
  name: "Marcus",
};

const sayMarcusName = sayMyName.bind(me2);
const greetMarcus = greeting.bind(me2, "ENG");

console.log(sayMarcusName);
console.log(`BIND: ${sayMarcusName()}`);
console.log(`BIND: ${greetMarcus()}`);

console.log(`CALL: ${sayMyName.call(me2)}`);
console.log(`CALL: ${greeting.call(me2, "FRA")}`);

console.log(`APPLY: ${sayMyName.apply(me2)}`);
console.log(`APPLY: ${greeting.apply(me2, ["FRA"])}`);

console.log(" \n====================BIND, CALL AND APPLY: PASSING NULL================");

const mockUser = {
  giveThis() {
    return this;
  },
};

// -Value in Node.js: Global Object (null when "use strict" in enabled)
// -Value in browser: Window
console.log(`BIND: ${mockUser.giveThis.bind(null)()}`);
console.log(`CALL: ${mockUser.giveThis.call(null)}`);
console.log(`APPLY: ${mockUser.giveThis.apply(null)}`);

console.log(" \n====================BIND: POLYFILL================");

car1 = {
  color: "Red",
  company: "Ford",
};

function purchaseCar(currency, price) {
  console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`);
}

Function.prototype.ownBind = function (context, ...args) {
  const uniqueKey = Symbol();
  context[uniqueKey] = this;
  return function (...newArgs) {
    return context[uniqueKey](...args, ...newArgs);
  };
};

purchaseCar.bind(car1, "$", 100000)();
purchaseCar.bind(car1)("$", 100000);
purchaseCar.ownBind(car1, "$", 100000)();
purchaseCar.ownBind(car1, "$")(100000);
purchaseCar.ownBind(car1)("$", 100000);

console.log(" \n====================CALL: POLYFILL================");

Function.prototype.ownCall = function (context, ...args) {
  const uniqueKey = Symbol();
  context[uniqueKey] = this;
  const result = context[uniqueKey](...args);
  delete context[uniqueKey];
  return result;
};

purchaseCar.call(car1, "$", 100000);
purchaseCar.ownCall(car1, "$", 100000);

console.log(" \n====================APPLY: POLYFILL================");

Function.prototype.ownApply = function (context, args = []) {
  if (!Array.isArray(args)) {
    throw new TypeError("TypeError: CreateListFromArrayLike called on non-object");
  }
  const uniqueKey = Symbol();
  context[uniqueKey] = this;
  const result = context[uniqueKey](...args);
  delete context[uniqueKey];
  return result;
};

purchaseCar.apply(car1, ["$", 100000]);
purchaseCar.ownApply(car1, ["$", 100000]);
