/*
  WHAT IS?
  The this keyword is a reference to the current execution context of the object where the function is being invoked on.

  POSSIBLE VALUES FOR THIS
  1. If called in the global execution context, "THIS" will refer to the Global object.
  2. If called inside an object method, "THIS" will refer to the object.
  3. If called inside a function, "THIS" will refer to the Global object (or "undefined" if strict mode is enabled).
  4. In arrow functions, "THIS" is inherited from the lexical context (outer scope) where the arrow function was defined.
  5. If called in an event listener, "THIS" will refer to the DOM element that fired the event.
  6. The methods "bind", "call" and "apply" can be used to set manually the value of THIS:
    - Bind creates a new function, but it does not execute it (it could be executed later).
    - Call and apply invoke inmediately the method.
    All three methods allow you send an an optional list of arguments: 
    - For Bind and Call, you send them separated by commas.
    - For Apply, you send them in an array.
  7. If called in a callback or an event handler, "THIS" will refer to the Global object ("undefined" if strict mode is enabled).
*/
"use strict";

// 1. If called in the global execution context, "THIS" will refer to the Global object:
//   -Value in Node.js: "{}"
//   -Value in browser: Window
console.log(this);

// 2. If called inside an object method, "THIS" will refer to the object.
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

// 3. If called inside a function, "THIS" will refer to the Global object:
//       -Value in Node.js: "[Object: global]"
//       -Value in browser: Window
talkMe(); // undefined because "use strict" in enabled

// 4. In arrow functions, "THIS" is inherited from the lexical context (outer scope) where the arrow function was defined.
const her = {
  name: "Daniela",
  surname: "Sarati",
  sayName: () => this.name + " " + this.surname,
};

// undefined because "use strict" in enabled, otherwise it will be "[Object: global]" (Node.js) or Window (browser)
console.log(`THIS FOR HER: ${her.sayName(her)}`);

// 5. If called in an event listener, "THIS" will refer to the DOM element that fired the event.
// RUN the file: this-event-listener.html

// 6. The methods "bind", "call" and "apply" can be used to set manually the value of THIS.
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

console.log(`APPLY: ${sayMyName.call(me2)}`);
console.log(`APPLY: ${greeting.call(me2, ["FRA"])}`);

//7. If called in a callback or an event handler, "THIS" will refer to the Global object ("undefined" if strict mode is enabled).
function PersonWithCallback(name) {
  this.name = name;

  // To resolve this you can use:
  // 1. The .bind(this)
  // 2. An arrow function
  // setTimeout(function () {
  //   console.log(this);
  // }, 100);
  setTimeout(() => {
    console.log(`CALLBACK INSIDE FUNCTION:`, this);
  }, 100);
}

const mariah = new PersonWithCallback("Mariah");
