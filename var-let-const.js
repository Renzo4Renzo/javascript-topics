/*
  VAR
    Could NOT be Block-scoped (Function-scoped OR Global-scoped)
      A variable with the same name outside of the block scope CAN override the value in the one living inside (or viceversa)
    You CAN redeclare VAR
    Declaration is hoisted as UNDEFINED

  CONST and LET 
    Could be Block-scoped
      A variable with the same name outside of the block scope CAN'T override the value in the one living inside (or viceversa).

    You CAN'T redeclare them (in the same scope).
    You CAN'T reassign CONST, but you CAN reassign LET:
    If CONST is an object or array, you can change the values inside of them because CONST only ensures the reference remains constant. You need Object.freeze() to make the values inside of them inmutable.
    Declaration is hoisted as VARIABLE NOT INITIALIZED.

    VARIABLE SHADOWING 
    Several variables with the same names but different values can coexist if:
     1. They belong to different scopes.
     2. Variables living in a block scope are declared with const/let.
    Otherwise, this results in illegal shadowing.
*/
console.log("\n===============VAR============");
console.log(variable1);

if (true) {
  var variable1 = "Hello";
}
var variable1 = "Bye";
console.log(variable1);

console.log("\n===============LET/CONST============");
if (true) {
  // console.log(variable2); // ReferenceError: Cannot access 'variable2' before initialization
  let variable2 = "Hello";
  //let variable2 = "Bye"; //Cannot redeclared scoped variables
}

// console.log(variable2); //ReferenceError: variable2 is not defined

console.log("\n===============VARIABLE SHADOWING============");
var a = 2;
let b = 5;

if (true) {
  let a = 3;
  //var b = 0; //ILLEGAL SHADOWING: Cannot redeclared block-scope variable "b"
  console.log("a:", a);
  //console.log(b);
}
console.log("a:", a);
console.log("b:", b);

/*
  NOTE: The following code print "5" five times because "var" is not block-scoped, so when the event loop returns the timeouts to the main thread, the final value of "i" is used for each callback.
  You have to use "let i=0" if you want to print 0,1,2,... instead.
*/
console.log("\n===============FOR LOOP: VAR IS NOT BLOCKED SCOPED============");
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 100);
}
