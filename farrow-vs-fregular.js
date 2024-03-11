/*
    Differences (besides the syntax):
        1. Regular functions HAVE the arguments object, arrow ones DON'T
        2. THIS keyword:
          -In regular functions, THIS points to the object that calls the function (it creates its own binding).
          -In arrow functions, THIS points to what this was before the function was created (NOTE: Arrow functions SHOULDN'T be methods) (NOTE 2: Call, apply and bind don't work with arrow functions).
        3. Regular functions CAN be used as constructors, arrow functions CAN'T (they will throw an error when called with "new" keyword)
        4. Regular functions CAN be EXPRESSED or DECLARED. Arrow function can only be EXPRESSED.
        5. Regular functions can be used before the line they were initialized, but not arrow functions (This happens because the function is hoisted)
        6. Regular functions CAN be used as generators, arrow functions CAN'T
*/

/* 1. Regular functions HAVE the arguments object, arrow ones DON'T */

function print1() {
  console.log(arguments);
}
const print2 = () => {
  console.log(arguments);
};

print1("hi", 400);

/* NOTE: The arguments object in Node.js refers to the command-line arguments passed to the Node.js process, not the function arguments. Therefore the expected error shown below won't happen in Node.js */
// print2("hey there", 100, false); // Uncaught ReferenceError: arguments is not defined

/* 2. THIS keyword */

// 2A -> Arrow functions SHOULDN'T be methods
const obj1 = {
  name: "deeecode",
  age: 200,
  print: function () {
    console.log(this);
  },
};
obj1.print(); // { name: 'deeecode', age: 200, print: [Function: print] }

const obj2 = {
  name: "deeecode",
  age: 200,
  print: () => {
    console.log(this);
  },
};
obj2.print(); // Window -> Browser; Global Object -> Node.js

// 2B -> Call, apply and bind don't work with arrow functions
function outer(callback, obj) {
  callback.call(obj);
}

// const inner = () => console.log(this);
function inner() {
  console.log(this);
}

// Result with arrow function: {} -> Node.js sets this value in the global context to "{}"
// Result with regular function: { name: "Renzo" }
outer(inner, { name: "Renzo" });

/* 3. Regular functions CAN be used as constructors, arrow functions CAN'T */

// 3A
class Animal1 {
  constructor(name, numOfLegs) {
    this.name = name;
    this.numOfLegs = numOfLegs;
  }

  sayName() {
    console.log(`Animal1: My name is ${this.name}`);
  }
}

const Dog = new Animal1("Bingo", 4);
const Bird = new Animal1("Steer", 2);

Dog.sayName(); // My name is Bingo
Bird.sayName(); // My name is Steer

// 3B
// class Animal2 {
//   Constructor is interpreted as a field rather than a constructor
//   constructor = (name, numOfLegs) => {
//     this.name = name
//     this.numOfLegs = numOfLegs
//   }

//   sayName() {
//     console.log(`My name is ${this.name}`)
//   }
// }

// 3C
class Animal3 {
  constructor(name, numOfLegs) {
    this.name = name;
    this.numOfLegs = numOfLegs;
  }

  sayName = () => {
    console.log(`Animal3: My name is ${this.name}`);
  };
}

const Dog2 = new Animal3("Bingo", 4);

Dog2.sayName(); // My name is Bingo

// 3D
const sayHello = (name) => (this.name = name);
const sayHelloRF = function (name) {
  this.name = name;
};

// const diego = new sayHello("Diego"); //TypeError: sayHello is not a constructor
const renzo = new sayHelloRF("Renzo");
console.log(renzo);

/* 4. Regular functions CAN be EXPRESSED or DECLARED. Arrow function can only be EXPRESSED. */

function printHello1() {
  console.log("hello");
}

const printHello2 = function () {
  console.log("hello");
};

const printHello3 = () => {
  console.log("hello");
};

/* 5. Regular functions can be used before the line they were initialized, but not arrow functions (This happens because the function is hoisted) */

printName1();
console.log("printName1: hello");

function printName1() {
  console.log("printName1: I am Renzo");
}

// printName2(); // ReferenceError: Cannot access 'printName2' before initialization
console.log("printName2: hello");

const printName2 = () => {
  console.log("printName2: I am Renzo");
};
