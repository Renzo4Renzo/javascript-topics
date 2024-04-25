/*
  Function Declaration:
    -When you use the keyword function and specify a name for the function
  Function Expression: 
    -It's an anonymous or an arrow function assigned to a variable

  Differences:
    1. You can use a DECLARED FUNCTION before the line it was initialized, but not an EXPRESSED FUNCTION (This happens because the function is hoisted)
    2. You can only use a EXPRESSED FUNCTION when you:
       - Assign it to a variable
       - Create an IIFE (Immediately Invoked Function Expressions)
       - Pass it as a parameter in a callback function (forEach, etc.)
    3. Arrow functions can only be EXPRESSED, not DECLARED
*/

console.log("=========DECLARED EXPRESSION: THEY CAN BE USED BEFORE THE LINE IT WAS INITIALIZED (HOISTING)=========");
const result = sum(20, 50);
console.log(result);

// const result2 = sum2(20, 50); // ReferenceError: Cannot access 'sum2' before initialization
// console.log(result2);

function sum(num1, num2) {
  return num1 + num2;
}

const sum2 = function (num1, num2) {
  return num1 + num2;
};

console.log("\n=========FUNCTION EXPRESSION: CREATE AN IIFE=========");
(function () {
  console.log("Text inside IIFE printed");
})();

console.log("\n=========FUNCTION EXPRESSION: PASS IT AS PARAMETER IN A CALLBACK FUNCTION=========");
const array = [1, 2, 3, 4, 5];
array.forEach(function (item) {
  console.log(item);
});

console.log("\n=========FUNCTION EXPRESSION: ARROW FUNCTIONS CAN ONLY BE EXPRESSED=========");
const arrowFunction = (text) => {
  console.log(`Text: ${text}`);
};
arrowFunction("Yeah!");
