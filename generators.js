/*
    WHAT IS?
    They are functions that can be exited and later re-entered with its contexts saved across re-entrances. 
    They are able to return multiple values on-demand.
    Generators are iterable.

    GENERATOR COMPOSITION
    Generators feature (yield*) that allows to transparently “embed” generators in each other.

    PASSING ARGUMENTS
    Yield can both return a result to the outside and pass a value inside the generator.

    GENERATOR.RETURN
    Finishes the generator execution and return the given value.

    GENERATOR.THROW
    Allows to pass errors to generators.
*/

console.log("================GENERATORS================");
function* simpleGenerator() {
  console.log("Before yield 1");
  yield 1;
  console.log("After yield 1");
  console.log("Before yield 2");
  yield 2;
  console.log("After yield 2");
  console.log("Before yield 3");
  yield 3;
  console.log("After yield 3");
}

const generatorObject = simpleGenerator();
console.log(generatorObject.next()); //{ value: 1, done: false }
console.log(generatorObject.next()); //{ value: 2, done: false }
console.log(generatorObject.next()); //{ value: 3, done: false }
console.log(generatorObject.next()); //{ value: undefined, done: true }

console.log("================MULTIPLE GENERATORS AT ONCE================");
function* generatorMGO() {
  yield 1;
  yield 2;
  yield 3;
}

const generatorMGOObject1 = generatorMGO();
console.log("GENERATOR 1:");
console.log(generatorMGOObject1.next());
console.log(generatorMGOObject1.next());
const generatorMGOObject2 = generatorMGO();
console.log("GENERATOR 2:");
console.log(generatorMGOObject2.next());
console.log(generatorMGOObject2.next());

console.log("================GENERATORS ARE ITERABLE================");
function* generatorI(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

let generator = generatorI([1, 3, 5]);

for (let value of generator) {
  console.log(value);
}

console.log("================USE CASE: INFINITE LOOP================");
function* generateId() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

const generateIDObject = generateId();
console.log(generateIDObject.next());
console.log(generateIDObject.next());
console.log(generateIDObject.next());
console.log(generateIDObject.next());

console.log("================GENERATOR COMPOSITION================");
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
  yield* generateSequence(48, 57); // 0...9
  yield* generateSequence(65, 90); // A..Z
  yield* generateSequence(97, 122); // a..z
}

let str = "";

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log("Alphanumeric:", str);

console.log("================PASSING ARGUMENTS================");
function* generateIdPPTNX() {
  let id = 1;
  while (true) {
    const increment = yield id;
    if (increment) {
      id += increment;
    } else {
      id++;
    }
  }
}

const generateObjectPPTNX = generateIdPPTNX();
console.log(generateObjectPPTNX.next());
console.log(generateObjectPPTNX.next(3));
console.log(generateObjectPPTNX.next(4));

console.log("================GENERATOR.RETURN()===============");
console.log(generateObjectPPTNX.return(1)); //It ends the generator with the value passed!
console.log(generateObjectPPTNX.next());

console.log("================GENERATOR.THROW()================");
function* generatorTE() {
  let id = 1;
  try {
    while (true) {
      yield id;
      id++;
    }
  } catch (error) {
    console.log(error.message);
  }
}

const generateObjectTE = generatorTE();
console.log(generateObjectTE.next());
console.log(generateObjectTE.throw(new Error("Terrible error, boo!")));
