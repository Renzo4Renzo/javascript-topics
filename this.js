/*
  WHAT IS?
  The this keyword is a reference to the current execution context of the object where the function is being invoked on.

  POSSIBLE VALUES FOR THIS
  1. If called in the global execution context, "THIS" will refer to the Global object.
  2. If called inside a regular function:
     - For an object method, "THIS" will refer to the object.
     - For a function not within an object, "THIS" will refer to the Global object.
  3. In arrow functions, "THIS" is inherited from the lexical context (outer scope) where the arrow function was defined.
  4. If called in an event listener, "THIS" will refer to the DOM element that fired the event.
  5. If called in a callback, "THIS" will refer to the Global object (NOTE: Use an arrow function to inherit "this" from the outer scope).
  6. The methods "bind", "call" and "apply" can be used to set manually the value of THIS:
    - Bind creates a new function, but it does not execute it (it could be executed later).
    - Call and apply invoke inmediately the method.
    All three methods allow you send an an optional list of arguments: 
    - For Bind and Call, you send them separated by commas.
    - For Apply, you send them in an array.
    All three methods return you the global object when "null" is passed as context. You can't chain any of these methods.
*/
"use strict";

console.log("====================THIS: GLOBAL EXECUTION CONTEXT================");
//   -Value in Node.js: "{}" (module's scope, not global scope)
//   -Value in browser: Window
console.log(this);

console.log(" \n====================THIS: INSIDE OBJECT METHOD================");
function talkMe() {
  return console.log(`FUNCTION TALKME:`, this);
}

const me = {
  name: "Renzo",
  talkMe,
};

const you = {
  name: "Diego",
  talkMe,
};

me.talkMe();
you.talkMe();

function Person(name) {
  this.name = name;
  this.talkMe = function () {
    console.log(`CONSTRUCTOR FUNCTION:`, this);
  };
}

const napoleon = new Person("Napoleon");
napoleon.talkMe();

console.log(" \n====================THIS: INSIDE FUNCTION================");
//    -Value in Node.js: Global Object / undefined
//    -Value in browser: Window
talkMe(); // undefined because "use strict" in enabled

console.log(" \n====================THIS: ARROW FUNCTION================");
const her = {
  name: "Daniela",
  surname: "Sarati",
  sayName: () => this.name + " " + this.surname,
};

// undefined
console.log(`THIS - ARROW FUNCTION:`, her.sayName());

console.log(" \n====================THIS: EVENT LISTENER================");
console.log("Run the file 'this-event-listener.html' using the VS Live Server Plugin");

console.log(" \n====================THIS: CALLBACK================");
//    -Value in Node.js: "Timeout object"
//    -Value in browser: Window
function PersonWithCallback(name) {
  this.name = name;
  setTimeout(function () {
    console.log(this);
  }, 100);
  // To resolve this you can use:
  // 1. The .bind(this)
  // setTimeout(
  //   function () {
  //     console.log(this);
  //   }.bind(this),
  //   100
  // );
  // 2. An arrow function
  // setTimeout(() => {
  //   console.log(`CALLBACK INSIDE FUNCTION:`, this);
  // }, 100);
}

const mariah = new PersonWithCallback("Mariah");
