/*
    WHAT IS?
    It means that functions can be treated like any other object, so:
      1. Can be assigned to variables and stored in data structures (arrays, objects, etc)
      2. Can be passed as arguments
      3. Can be returned by another function
      4. They have built-in properties: name, .toString(), call(), apply()
      5. You can add properties and methods to them  
*/

console.log("=========ASSIGN A FUNCTION TO A VARIABLE========");
const originalFunc = (num) => {
  return num + 2;
};

console.log("\n=========PASS THE FUNCTION AS AN ARGUMENT========");
const functionNameLength = (func) => {
  return func.name.length;
};
console.log(functionNameLength(originalFunc));

console.log("\n=========FUNCTION CAN BE RETURNED BY ANOTHER FUNCTION========");
const returnFunc = () => {
  return originalFunc;
};
console.log(returnFunc());

console.log("\n=========ACCESS BUILT-IN PROPERTIES IN THE FUNCTION========");
originalFunc.name;
console.log(originalFunc.name);
console.log(originalFunc.toString());

console.log("\n=========ADD OUR OWN PROPERTY TO THE FUNCTION========");
originalFunc.isMathFunction = true;
console.log(originalFunc.isMathFunction);
