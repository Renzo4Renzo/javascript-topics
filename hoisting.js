/*
  WHAT IS?
    A behavior whereby the Javascript interpreter reads and processes the declaration of functions, variables, classes, or imports before the execution of the code.

  TEMPORAL DEAD ZONE (TDZ)
    A period during execution where let and const variables are hoisted but not accessible because they haven't been initialized yet. 
    VAR variables are hoisted with "undefined" since the very beginning so the TDZ ends right after its hosting.
      
  HOW IT WORKS?
    Var - You get "undefined" if you access the variable before it was declared.
    Let/Const and Classes - You get a ReferenceError if you access them before it was declared.    
*/

console.log("\n===============HOISTING - VAR============");
console.log(`hVar: ${hVar}`); // undefined
var hVar = 10;
console.log(`hVar: ${hVar}`); // 10

console.log("\n===============HOISTING - LET/CONST============");
// console.log(hLetConst); //ReferenceError: Cannot access 'number' before initialization
let hLetConst = 10;
console.log(`hLetConst: ${hLetConst}`);

console.log("\n===============HOISTING - CLASS============");
// const dog = new Animal("dog", 4); //ReferenceError: Cannot access 'Animal' before initialization
// console.log(`hClass: ${dog}`);

class Animal {
  constructor(animalName, legs) {
    this.animalName = animalName;
    this.legs = legs;
  }
}

const dog = new Animal("dog", 4);
console.log(`hClass[properties]: ${dog.animalName} ${dog.legs}`);

console.log("\n===============TEMPORAL DEAD ZONE | REFERENCE ERROR ============");
// tdzREBestFood’s TDZ starts here (at the beginning of this block’s local scope)
// tdzREBestFood’s TDZ continues here
//console.log(tdzREBestFood); // returns ReferenceError because tdzREBestFood’s TDZ continues here
// tdzREBestFood’s TDZ continues here
let tdzREBestFood = "Vegetable Fried Rice"; // tdzREBestFood’s TDZ ends here
// tdzREBestFood’s TDZ does not exist here

console.log("\n===============TEMPORAL DEAD ZONE | NO REFERENCE ERROR ============");
// TDZ starts here (at the beginning of this block’s local scope)
// tdzNREBestFood’s TDZ continues here
let tdzNREBestFood; // tdzNREBestFood’s TDZ ends here
console.log(`tdzNREBestFood: ${tdzNREBestFood}`); // returns undefined because tdzNREBestFood’s TDZ does not exist here
tdzNREBestFood = "Vegetable Fried Rice"; // tdzNREBestFood’s TDZ does not exist here
console.log(`tdzNREBestFood: ${tdzNREBestFood}`); // returns "Vegetable Fried Rice" because tdzNREBestFood’s TDZ does not exist here
