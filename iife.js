/*
    IIFE (Inmediatly Invoked Function Expression)
    Function expression defined and executed inmediately after its creation.
    It's an isolated and self-contained block of code (encapsulation).

    Both anonymous and named IIFE are allowed. 
    Named IIFE can be helpful for recursive calls or debugging.

    BENEFITS
    1. Isolate code and keep private variable/method (you can create modules and closures).
    2. Does not polute the global space.
    3. Managing initialization & configure settings.
*/

console.log("===============ANONYMOUS IIFE============");
(function () {
  var message = "This is an anonymous IIFE!";
  console.log(message);
})();
// console.log(message); //ReferenceError: message is not defined

console.log("\n===============NAMED IIFE============");
(function greet() {
  let message = "This is a named IIFE!";
  console.log(message);
})();

console.log("\n===============RECURSIVE NAMED IIFE============");
(function countDown(n) {
  if (n > 0) {
    console.log(n);
    countDown(n - 1);
  }
})(5);

console.log("\n===============RETURNING VALUES============");
const result = (function () {
  let x = 10;
  let y = 20;
  return x + y;
})();
console.log("Result: " + result);

console.log("\n===============USING CLOSURES============");
const increment = (() => {
  let counter = 0;
  const credits = (num) => console.log(`I have ${num} credits`);
  return () => {
    counter++;
    credits(counter);
  };
})();
increment();
increment();

console.log("\n===============REDUCING GLOBAL VARIABLES AND CREATING A MODULE============");
const Calculator = (() => {
  let calcResult = 0;

  function add(...args) {
    for (arg of args) {
      calcResult += arg;
    }
  }

  function getResult() {
    return calcResult;
  }

  return {
    add,
    getResult,
  };
})();
Calculator.add(2, 4, 1);
// console.log(calcResult); //ReferenceError: calcResult is not defined
console.log("Calculator.getResult():", Calculator.getResult());

console.log("\n===============ASYNC FUNCTION============");
const getResponse = async () => {
  setTimeout(() => {
    console.log("Async Function Response!");
  }, 200);
};

(async () => {
  await getResponse();
})();
