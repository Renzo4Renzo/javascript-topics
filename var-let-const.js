/*
  VAR
    Scope: Function-scoped or Global-scoped (not Block-scoped).
    Behavior: A variable with the same name outside a block can override one inside (or vice versa).
    Redeclaration: Allowed.
    Hoisting: Declared as undefined.
  CONST & LET
    Scope: Block-scoped.
    Behavior: A variable with the same name outside a block cannot override one inside.
    Redeclaration: Not allowed in the same scope.
    Reassignment:
      CONST: Cannot be reassigned.
      LET: Can be reassigned.
      Exception: If CONST is an object or array, its values can change (only the reference remains constant). Use Object.freeze() to make elements inmutable.
    Hoisting: Declared but not initialized.
  Variable Shadowing
    Multiple variables with the same name but different values can coexist if:
      1. They belong to different scopes.
      2. The inner variable is declared with LET or CONST.
    Otherwise, it results in illegal shadowing.
*/
console.log("\n===============VAR============");
console.log("vVariable:", vVariable); //undefined

if (true) {
  var vVariable = "Hello";
}
var vVariable = "Bye";
console.log("vVariable:", vVariable);

console.log("\n===============LET/CONST============");
if (true) {
  // console.log(lcVariable); // ReferenceError: Cannot access 'lcVariable' before initialization
  let lcVariable = "Hello";
  //let lcVariable = "Bye"; //Cannot redeclared scoped variables
}

// console.log(lcVariable); //ReferenceError: lcVariable is not defined

console.log("\n===============VARIABLE SHADOWING============");
var vshadowA = 2;
let vshadowB = 5;

if (true) {
  let vshadowA = 3;
  //var vshadowB = 0; //ILLEGAL SHADOWING: Cannot redeclared block-scope variable "b"
  console.log("vshadowA:", vshadowA);
  //console.log(vshadowB);
}
console.log("vshadowA:", vshadowA);
console.log("vshadowB:", vshadowB);

/*
  This prints "5" five times because "var" is function-scoped, not block-scoped.  
  By the time the timeouts execute, the loop has completed, and "i" is 5 in each callback.  
  Use "let i = 0" instead to print 0, 1, 2, 3, 4.
*/
console.log("\n===============FOR LOOP: VAR IS NOT BLOCKED SCOPED============");
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("Loop Counter:", i);
  }, i * 100);
}
