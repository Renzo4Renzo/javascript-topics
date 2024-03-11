/*
  VAR
    Could NOT be Block-scoped (Function-scoped OR Global-scoped)
      A variable with the same name outside of the block scope CAN override the value in the one living inside (or viceversa)
    You CAN redeclare VAR
    Declaration is hoisted as UNDEFINED

  CONST and LET 
    Could be Block-scoped
      A variable with the same name outside of the block scope CAN'T override the value in the one living inside (or viceversa)
    You CAN'T redeclare them (in the same scope).
    You CAN'T reassign CONST, but you CAN reassign LET:
    If CONST is an object or array, you can change the values inside of them because CONST only ensures the reference remains constant. You need Object.freeze() to make the values inside of them inmutable.
    Declaration is hoisted as VARIABLE NOT INITIALIZED
*/

console.log(variable1);

if (true) {
  var variable1 = "Hello";
}
var variable1 = "Bye";
console.log(variable1);

if (true) {
  // console.log(variable2); // ReferenceError: Cannot access 'variable2' before initialization
  let variable2 = "Hello";
  //let variable2 = "Bye"; //Cannot redeclared scoped variables
}

// console.log(variable2); //ReferenceError: variable2 is not defined
