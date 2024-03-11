/*
    STRICT MODE
    It enables a restricted variant of Javascript which:
        1. Converts some JavaScript silent errors into throw errors.
        2. Fixes mistakes that make it difficult to perform optimizations.
        3. Prohibits reserved words likely to be defined in future versions of ECMAScript.
    
    Enable it by adding "use string" at the top of your Javascript file, or at the top of a function body with no default, rest or destructured parameters.

    Strict mode is enabled by default in features like:
     -ES6 Classes
     -ES6 Modules
     -Arrow functions
     -Tagged template literals
 */
"use strict";

console.log("===============USING AN UNDECLARED VARIABLE============");

function strictFunctionUUV() {
  //username = "Marie"; //username is not defined
  let username = "Marie";
  console.log(username);
}
strictFunctionUUV();

console.log("\n===============DUPLICATING PARAMETERS============");
// function strictFunctionDP(num1, num1) { //SyntaxError: Duplicate parameter name not allowed in this context
//   console.log("num1 * num1:", num1 * num1);
// }
function strictFunctionDP(num1, num2) {
  console.log("num1 * num2:", num1 * num2);
}
strictFunctionDP(2, 3);

console.log("\n===============USING RESERVED FUTURE KEYWORDS============");
// const package = "This is a package"; //SyntaxError: Unexpected strict mode reserved word
const packageMax = "This is a package";
console.log(packageMax);

console.log("\n===============USE OF DEPRECATED FEATURES============");
function outerFunctionUDF() {
  innerFunctionUDF();
}

function innerFunctionUDF() {
  //   console.log(innerFunctionUDF.caller); //TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
  console.log("Hi from innerFunctionUDF");
}

outerFunctionUDF();

console.log("\n===============ASSIGNEMENT TO A READ-ONLY PROPERTY============");
const objAROP = {};

Object.defineProperty(objAROP, "key", { value: 10, writable: false });
// objAROP.key = 20; //TypeError: Cannot assign to read only property 'key' of object '#<Object>'

console.log("objAROP.key:", objAROP.key);

console.log("\n===============SHOWS ERROR WHEN TRYING TO DELETE UNDELETABLE PROPERTIES============");

const myObjectSEWTDUP = {
  key1: 23,
  key2: 22,
};
delete myObjectSEWTDUP.key2;
console.log(myObjectSEWTDUP);
//delete Object.prototype; //TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

console.log("\n===============USING OCTALS LITERALS============");

//console.log("Octal Number:", 015); //SyntaxError: Octal literals are not allowed in strict mode.
console.log("Octal Number:", 0o15);

console.log("\n===============ADDING PROPERTIES IN PRIMITIVES============");

const myStringADIP = "text";
// myStringADIP.key1 = 10; //TypeError: Cannot create property 'key1' on string 'text'
console.log("myStringADIP:", myStringADIP);

console.log("\n===============CONSISTENCY OF ARGUMENTS KEYWORDS============");

function sum(a, b) {
  a = 10;
  return [a + b, arguments[0] + arguments[1]];
}
console.log(sum(1, 2)); //Strict mode: [12,3] & Non-strict mode: [12,12]
