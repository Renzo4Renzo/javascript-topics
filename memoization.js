/*
    MEMOIZATION
    Optimization technique to speed up the execution of functions by caching results.
    If the same function is called multiple times with the same inputs, the memoized version returns the result instantly from the cache, reducing complexity and enhancing code efficiency.
*/

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function dummyLoop(num1, num2) {
  for (let i = 1; i <= 999999999; i++) {}
  return num1 * num2;
}

function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;

    return result;
  };
}

console.log("===========FIBONACCI============");
const fibonacciMemoized = memoize(fibonacci);

console.time("First Call");
console.log("fibonacciMemoized:", fibonacciMemoized(35));
console.timeEnd("First Call");

console.time("Second Call");
console.log("fibonacciMemoized:", fibonacciMemoized(35));
console.timeEnd("Second Call");

console.log("\n===========DUMMY LOOP============");
const dummyLoopMemoized = memoize(dummyLoop);

console.time("First Call");
console.log("dummyLoopMemoized:", dummyLoopMemoized(5, 7));
console.timeEnd("First Call");

console.time("Second Call");
console.log("dummyLoopMemoized:", dummyLoopMemoized(5, 7));
console.timeEnd("Second Call");
