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

/* HOISTING - VAR */
console.log(`number1: ${number1}`); // undefined
var number1 = 10;
console.log(`number1: ${number1}`); // 10

/* HOISTING - LET/CONST */
// console.log(number2); //ReferenceError: Cannot access 'number' before initialization
let number2 = 10;
console.log(`number2: ${number2}`);

/* CLASS */
// const dog = new Animal("dog", 4); //ReferenceError: Cannot access 'Animal' before initialization
// console.log(dog);

class Animal {
  constructor(animalName, legs) {
    this.animalName = animalName;
    this.legs = legs;
  }
}

/* TEMPORAL DEAD ZONE */

// With ReferenceError
{
  // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  //console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood1 = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
}

// Without Reference Error
{
  // TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood2; // bestFood’s TDZ ends here
  console.log(`BestFood2: ${bestFood2}`); // returns undefined because bestFood’s TDZ does not exist here
  bestFood2 = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
  console.log(`BestFood2: ${bestFood2}`); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
}
