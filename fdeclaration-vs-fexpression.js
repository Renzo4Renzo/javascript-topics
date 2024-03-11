/*
  Function Declaration:
    -When you use the keyword function and specify a name for the function
  Function Expression: 
    -It's an anonymous or an arrow function assigned to a variable

  Differences:
    1. You can use a DECLARED FUNCTION before the line it was initialized, but not an EXPRESSED FUNCTION (This happens because the function is hoisted)
    2. You can only use a EXPRESSED FUNCTION if:
       -You assign it to a variable
       -You use it on an IIFE (Immediately Invoked Function Expressions)
       -You use it as a callback function (forEach, etc.)
    3. Arrow function can only be EXPRESSED, not DECLARED
*/

// 1. You can use a DECLARED FUNCTION before the line it was initialized
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

// 2. You use it on an IIFE (Immediately Invoked Function Expressions)
(function () {
  console.log("Text inside IIFE printed");
})();

// 2. You use it as a callback function (forEach, etc.)
const array = [1, 2, 3, 4, 5];
array.forEach(function (item) {
  console.log(item);
});

// 3. Arrow function can only be EXPRESSED, not DECLARED
const arrowFunction = (text) => {
  console.log(`Text: ${text}`);
};
