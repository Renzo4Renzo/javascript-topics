/*
    SCOPE
    Space or environment where a variable is declared.

    Global Scope
        Variables outside of any function/block (accessible everywhere). 
        There is only one Global Scope in the document.
        Variables declared without a keyword are added to the global scope.
    Function/Local Scope
        Variables accessible only inside a function
    Block Scope (ES6)
        Let/Const variables accessible only inside the block (it doesn't work with var) 
        Functions accessible only inside the block (if "use strict" is enabled).

    LEXICAL SCOPE
    Ability for a function scope to access variables from the parent scopes.

    SCOPE CHAIN
    The list of scopes (local + all the parents scopes) available for lookup.
    When a variable is not in the current scope, a variable lookup starts through the scope chain.
*/

// GLOBAL SCOPE (variables declared without a keyword live in global scope)
console.log("\n============GLOBAL SCOPE============");

const gsAge = 22;
function sayName() {
  gsName = "Renzo";
  console.log("Global Scope | gsName:", gsName);
}
sayName();
console.log("Global Scope | gsName:", gsName); //It works because "gsName" lives in global scope.
console.log("Global Scope | gsAge:", gsAge);

//FUNCTION SCOPE
console.log("\n============FUNCTION SCOPE============");

function print() {
  var fsNum1 = 10;
  let fsNum2 = 20;
  const fsNum3 = 30;
  console.log("Function Scope | fsNum1:", fsNum1); // function scope
  console.log("Function Scope | fsNum2:", fsNum2); // function scope
  console.log("Function Scope | fsNum3:", fsNum3); // function scope
}
print();
// console.log("Function Scope | fsNum1:", fsNum1); //  Reference error: fsNum1 is not defined
// console.log("Function Scope | fsNum2:", fsNum2); // Reference error: fsNum2 is not defined
// console.log("Function Scope | fsNum3:", fsNum3); // Reference Error: fsNum3 is not defined

// BLOCK SCOPE
console.log("\n============BLOCK SCOPE============");

if (true) {
  var bsNum1 = 10;
  let bsNum2 = 20;
  const bsNum3 = 30;
}
console.log("Block Scope | bsNum1:", bsNum1);
// console.log("Block Scope | bsNum2:", bsNum2); // reference error: bsNum2 is not defined
// console.log("Block Scope | bsNum3:", bsNum3); // reference Error: bsNum3 is not defined

//SCOPE CHAIN
console.log();
console.log("============SCOPE CHAIN============");
// 1
var scNum1 = 10;
var scAdd = function () {
  // Local Variable
  var scNum2 = 20;
  console.log("Scope Chain | scNum1:", scNum1);
  console.log("Scope Chain | scNum2:", scNum2);
  // Global Variable Accessible inside function
  return scNum1 + scNum2;
};
console.log("Scope Chain | scNum1:", scNum1);
// console.log("Scope Chain | scNum2:", scNum2); // undefined error
console.log("Scope Chain | scAdd():", scAdd());

// 2
function parent() {
  var scName = "Renzo";
  console.log("Scope Chain | scName:", scName);
  // console.log("Scope Chain | scAge:", scAge); //  Reference error: scAge is not defined
  // console.log("Scope Chain | scPlaces:", scPlaces); //  Reference error: scPlaces is not defined

  function child() {
    var scAge = 23;
    console.log("Scope Chain | scName:", scName);
    console.log("Scope Chain | scAge:", scAge);
    // console.log("Scope Chain | scPlaces:", scPlaces); //  Reference error: scPlaces is not defined
    function grandchild() {
      var scPlaces = "Coding";
      console.log("Scope Chain | scName:", scName);
      console.log("Scope Chain | scAge:", scAge);
      console.log("Scope Chain | scPlaces:", scPlaces);
    }
    grandchild();
  }
  child();
}
parent();
