/*
    VALUE
    Values types store the actual value in the variable (stored in the stack).
    Primitives are passed by value.
    Primitives are inmutable (they do not have methods or properties than can alter them).

    REFERENCE
    Reference types store a reference to the actual object in the variable (reference stored in the stack, object stored in the heap).
    Objects (arrays included) are passed by reference.
    Objects are mutable (certain methods can alter them).
*/

console.log("===============COPYING: VALUE============");

let xValue = 2;
let yValue = xValue;
yValue += 1;
console.log("VALUE -> xValue:", xValue, "/ yValue:", yValue); //Not the same!

console.log("\n===============COPYING: REFERENCE============");

let xReference = [1, 2, 3];
let yReference = xReference;
yReference.push(4);
console.log("VALUE -> xReference:", xReference, "/ yReference:", yReference); //Same!

console.log("\n===============PASSING ARGUMENTS: VALUE============");

function addOneValue(x) {
  x++;
  return x;
}

let number = 5;
console.log("addOneValue(number):", addOneValue(number));
console.log("Number:", number);

console.log("\n===============PASSING ARGUMENTS: REFERENCE============");
function addToArrayRef(array) {
  array.push(4);
  return array;
}

let myArray = [1, 2, 3];
console.log("addToArrayRef(myArray):", addToArrayRef(myArray));
console.log("myArray:", myArray);

console.log("\n===============MUTABLE VS INMUTABLE============");
//NOTICE: Reassignment (full change) is not the same as mutable (partial change)!
let primitiveInmutable = "Renzo";
primitiveInmutable[0] = "G";
console.log("primitiveInmutable:", primitiveInmutable); //Not mutated!

let structureMutable = [2, 3, 4];
structureMutable[0] = 0;
console.log("structureMutable:", structureMutable); //Mutated!
