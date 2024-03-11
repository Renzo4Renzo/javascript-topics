/*
    WHAT IS?
    Transformation of functions with multiple arguments into a sequence of functions each taking one argument at a time.
    Currying is possible when the curried function has a fixed number of arguments.
    Useful to create partially applied functions.
*/

console.log("==============CURRYING==============");
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

console.log("==============LOGGING==============");
const advancedCurry = (someFunc) => {
  const expectedArgs = someFunc.length;
  const curried = (...args) => {
    return args.length >= expectedArgs ? someFunc(...args) : (...args2) => curried(...args.concat(args2));
  };
  return curried;
};

function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

const curriedLog = advancedCurry(log);

curriedLog(new Date(), "DEBUG", "random debug");
curriedLog(new Date())("DEBUG")("random debug");

console.log("==============PARTIALLY APPLIED FUNCTION==============");
const logNow = curriedLog(new Date());
logNow("INFO", "My message");

let debugNow = logNow("DEBUG");
debugNow("some message");
