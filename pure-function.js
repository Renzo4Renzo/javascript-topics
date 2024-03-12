/* 
    PURE FUNCTION
    A function is pure if:
      1. It's deterministic: always return the same output for a given input.
      2. It doesn't produce side-effects: it doesn't change states outside the function scope.
         Examples:
          - Changing variables outside the function scope.
          - Logging to console.
          - Changing document title.
          - DOM manipulation.
          - Making HTTP requests.
    
    BENEFITS
    1. Pure functions can be "memoized" (the results of previous calls can be stored in memory).
    2. Easy to compose (they can be used to create more complex functions).
*/

console.log("===============SAME INPUTS PRODUCE SAME OUTPUTS============");

const addPureF = (value1, value2) => value1 + value2;
console.log("1st time - addPureF:", addPureF(2, 4));
console.log("2nd time - addPureF:", addPureF(2, 4));
console.log("3rd time - addPureF:", addPureF(2, 4));

let total = 0;
const addImpureF = (value1IF) => (total += value1IF);
console.log("1st time - addImpureF:", addImpureF(4));
console.log("2nd time - addImpureF:", addImpureF(4));
console.log("3rd time - addImpureF:", addImpureF(4));

console.log("\n===============SIDE EFFECTS============");

const impureAssociation = (key, value, object) => {
  //This mutates an object outside the function
  object[key] = value;
};

const personIA = {
  name: "Bobo",
};

const impureResult = impureAssociation("shoeSize", 400, personIA);

console.log({ personIA, impureResult });

console.log("\n===============NO SIDE EFFECTS============");

const pureAssociation = (key, value, object) => ({
  ...structuredClone(object),
  [key]: value,
});

const personPA = {
  name: "Bobo",
  scores: { first: 10, second: 20 },
};

const pureResult = pureAssociation("shoeSize", 400, personPA);
pureResult.scores.first = 15;

console.log({
  personPA,
  pureResult,
});

console.log("\n===============PURYFING A FUNCTION============");

function addDefaultsImpure(originalImpure, defaults) {
  return Object.assign(originalImpure, defaults);
}

const originalImpure = { a: 1 };
const resultImpure = addDefaultsImpure(originalImpure, { b: 2 });

console.log("originalImpure:", originalImpure);
console.log("resultImpure:", resultImpure);

function addDefaultsPure(originalPure, defaults) {
  return Object.assign({}, originalPure, defaults);
}

const originalPure = { a: 1 };
const resultPure = addDefaultsPure(originalPure, { b: 2 });

console.log("originalPure:", originalPure);
console.log("resultPure:", resultPure);

console.log("\n===============MEMOIZING A PURE FUNCTION============");

const add10 = (n) => n + 10;

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoizedAdd = memoize(add10);
console.log("memoizedAdd(3) calculated:", memoizedAdd(3));
console.log("memoizedAdd(3) cached:", memoizedAdd(3));
console.log("memoizedAdd(4) calculated:", memoizedAdd(4));
console.log("memoizedAdd(4) cached:", memoizedAdd(4));

console.log("\n===============COMPOSING A PURE FUNCTION============");

function sumCPF(a, b) {
  return a + b;
}

function sumOfArrayCPF(array) {
  return array.reduce(sumCPF);
}

console.log("sumOfArrayCPF:", sumOfArrayCPF([2, 3]));
