/*
    WHAT IS?
    It means that functions can be treated like any other object, so:
        1. Can be assigned to variables and stored in data structures (arrays, objects, etc)
        2. Can be passed as arguments
        3. They have built-in properties: name, .toString(), call(), apply()
        4. You can add properties and methods to them
        5. Can be returned by another function
*/

//1. Assign a function to a variable originalFunc
const originalFunc = (num) => {
  return num + 2;
};

//2. Pass the function as an argument
const functionNameLength = (func) => {
  return func.name.length;
};
console.log(functionNameLength(originalFunc));

//3. Access the function's name property
originalFunc.name;
console.log(originalFunc.name);

//3. Return the function's body as a string
console.log(originalFunc.toString());

//4. Add our own isMathFunction property to the function
originalFunc.isMathFunction = true;
console.log(originalFunc.isMathFunction);

//5. Return the function
const returnFunc = () => {
  return originalFunc;
};
console.log(returnFunc());
