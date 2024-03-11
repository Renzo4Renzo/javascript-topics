/* 
  WHAT IS?
  A closure gives you access to an outer function's scope from an inner function.
  A function that uses variables from the parent scope.

  WHAT DO YOU NEED IT FOR?
  Closures rememeber the outer function scope even after creation time, so they can work with variables created in that scope.
  You can reuse functions: just passing different parameters to the outer function. 
*/

/* EXAMPLE 1 */
function human(name) {
  function sayHi() {
    console.log(`Hi I'm ${name}`);
  }
  function sayHowYouFeel() {
    console.log(`${name} is feeling awesome!`);
  }
  return {
    sayHi,
    sayHowYouFeel,
  };
}

const diego = human("Diego");
const ibeth = human("Ibeth");
diego.sayHi();
ibeth.sayHowYouFeel();

/* EXAMPLE 2 */
function clickHandler(size) {
  return function () {
    console.log(`My size is ${size}px`);
  };
}

buttonSize12 = clickHandler(12);
buttonSize12();

/* EXAMPLE 3 */
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return console.log(`The sum is: ${a + b + c + d}`);
      };
    };
  };
}

sum1 = sum(5);
sum2 = sum1(10);
sum3 = sum2(15);
sumfinalA = sum3(20);
sumfinalB = sum3(0); //You have the flexibility to "fix" some parameters and then assign dynamically just the last ones.

sum(1)(2)(3)(4);
