/*
    SCOPE
    Space or environment where a variable is declared.

    Global Scope
      Variables outside of any function/block (accessible everywhere). 
      There is only one Global Scope in the document.
      Variables declared without a keyword are ALWAYS added to the global scope.
    Function/Local Scope
      Variables are accessible only inside the function
    Block Scope (since ES6)
      Let/Const variables are accessible only inside the block (it doesn't work with var) 
      Functions are accessible only inside the block.

    LEXICAL SCOPE
    The ability for a function scope to access variables from parent scopes.

    SCOPE CHAIN
    The list of scopes (local + all the parent scopes) available for lookup.
    When a variable is not in the current scope, a variable lookup starts through the scope chain.
*/

console.log("\n============GLOBAL SCOPE============");

const gsAge = 22;
function sayName() {
  gsName = "Renzo";
  console.log("gsName:", gsName);
}
sayName();
console.log("gsName:", gsName); //It works because "gsName" lives in global scope.
console.log("gsAge:", gsAge);

//FUNCTION SCOPE
console.log("\n============FUNCTION SCOPE============");

function print() {
  var fsNum1 = 10;
  let fsNum2 = 20;
  const fsNum3 = 30;
  console.log("fsNum1:", fsNum1); // function scope
  console.log("fsNum2:", fsNum2); // function scope
  console.log("fsNum3:", fsNum3); // function scope
}
print();
// console.log("fsNum1:", fsNum1); //  Reference error: fsNum1 is not defined
// console.log("fsNum2:", fsNum2); // Reference error: fsNum2 is not defined
// console.log("fsNum3:", fsNum3); // Reference Error: fsNum3 is not defined

// BLOCK SCOPE
console.log("\n============BLOCK SCOPE============");

if (true) {
  var bsNum1 = 10;
  let bsNum2 = 20;
  const bsNum3 = 30;
  const bsFunction = () => console.log("I'm bsFunction!");
  console.log("bsNum1:", bsNum1);
  console.log("bsNum2:", bsNum2);
  console.log("bsNum3:", bsNum3);
  bsFunction();
}
console.log("bsNum1:", bsNum1);
// console.log("bsNum2:", bsNum2); // reference error: bsNum2 is not defined
// console.log("bsNum3:", bsNum3); // reference Error: bsNum3 is not defined
// bsFunction(); // reference Error: bsFunction is not defined

//SCOPE CHAIN
console.log("\n============SCOPE CHAIN: CASE 1============");
var scNum1 = 10;
var scAdd = function () {
  var scNum2 = 20;
  console.log("scNum1:", scNum1); // Global Variable Accessible inside function
  console.log("scNum2:", scNum2);
  return scNum1 + scNum2;
};
console.log("scNum1:", scNum1);
// console.log("scNum2:", scNum2); // undefined error
console.log("scAdd():", scAdd());

console.log("\n============SCOPE CHAIN: CASE 2============");
function parent() {
  var scName = "Renzo";
  console.log("scName:", scName);
  // console.log("scAge:", scAge); //  Reference error: scAge is not defined
  // console.log("scPlaces:", scPlaces); //  Reference error: scPlaces is not defined

  function child() {
    var scAge = 23;
    console.log("scName:", scName);
    console.log("scAge:", scAge);
    // console.log("scPlaces:", scPlaces); //  Reference error: scPlaces is not defined
    function grandchild() {
      var scPlaces = "Coding";
      console.log("scName:", scName);
      console.log("scAge:", scAge);
      console.log("scPlaces:", scPlaces);
    }
    grandchild();
  }
  child();
}
parent();
