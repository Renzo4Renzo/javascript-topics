/*
    WHAT IS?
    Transformation of functions with multiple arguments into a sequence of functions each taking one argument at a time.
    Useful to create partially applied functions.
*/

console.log("==============SIMPLE CURRYING==============");
function simpleCurry(someFunction) {
  return function (a) {
    return function (b) {
      return someFunction(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = simpleCurry(sum);

console.log(curriedSum(1)(2));

console.log("\n==============ADVANCED CURRYING: FIXED NUMBER OF PARAMETERS==============");
const advancedCurry = (someFunc) => {
  const expectedArgs = someFunc.length;
  // console.log("expectedArgs:", expectedArgs); //Logs once
  const curried = (...args) => {
    // console.log("args:", ...args); //Logs as many times as needed to get args.length >= expectedArgs
    return args.length >= expectedArgs ? someFunc(...args) : (...moreArgs) => curried(...args, ...moreArgs);
  };
  return curried;
};

function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

const curriedLog = advancedCurry(log);

curriedLog(new Date(), "DEBUG", "random debug");
curriedLog(new Date(), "DEBUG")("random debug");
curriedLog(new Date())("DEBUG", "random debug");
curriedLog(new Date())("DEBUG")("random debug");

console.log("\n==============PARTIALLY APPLIED FUNCTION==============");
const logNow = curriedLog(new Date());
logNow("INFO", "My message");

let debugNow = logNow("DEBUG");
debugNow("some message");

console.log("\n==============ADVANCED CURRYING: ANY NUMBER OF PARAMETERS==============");

function dynamicCurry(fn, ...args) {
  const accumulateArgs = (...moreArgs) => {
    if (moreArgs.length === 0) {
      return fn(...args);
    } else {
      const combinedArgs = args.concat(moreArgs);
      return dynamicCurry(fn, ...combinedArgs);
    }
  };
  return accumulateArgs;
}

function multiply(...args) {
  return args.reduce((acc, val) => acc * val, 1);
}

console.log(dynamicCurry(multiply, 3)(5)());

const curriedMultiplyByTwo = dynamicCurry(multiply, 2);
console.log(curriedMultiplyByTwo(5)());
console.log(curriedMultiplyByTwo(5)(5)());
console.log(curriedMultiplyByTwo(5, 5)());
