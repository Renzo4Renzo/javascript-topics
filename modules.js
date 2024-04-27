/*
    MODULE PATTERN
    -Allows to split up code into smaller, reusable pieces.
    -Allows to keep some variables/methods private: if a value is not explicitly exported, it won't be available outside the module.

    NOTE: Modules should be created as IIFEs that always return an object.

    REVEALING MODULE PATTERN
    It maintains encapsulation but reveals certain variables and methods by returning a object literal.
*/

console.log("=============MODULE PATTERN============");
const HTMLChanger = (function () {
  let contents = "contents";

  const changeHTML = function () {
    console.log("I've changed this attribute!");
  };

  return {
    callChangeHTML: function () {
      changeHTML();
      console.log(contents);
    },
  };
})();

HTMLChanger.callChangeHTML();
console.log(HTMLChanger.contents); //undefined

console.log("\n=============REVEALING MODULE PATTERN============");

const Exposer = (function () {
  let privateVariable = 10;

  const privateMethod = function () {
    console.log("Inside a private method!");
    privateVariable++;
  };

  const methodToExpose = function () {
    console.log("This is a method I want to expose!");
  };

  const otherMethodIWantToExpose = function () {
    privateMethod();
  };

  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose,
  };
})();

Exposer.first();
Exposer.second();
Exposer.methodToExpose; // undefined
