/*
    Array Methods Cheat Sheet
    https://array-methods.github.io/
*/
const nums = [1, 2, 3, 4, 5];

console.log("==========================MAP==========================");

const multiplyByThree = nums.map((value, _index, _nums) => {
  return value * 10;
});
console.log(multiplyByThree);

console.log("\n==========================FILTER==========================");

const moreThanTwo = nums.filter((value) => value > 2);
console.log(moreThanTwo);

console.log("\n==========================REDUCE==========================");

const sum = nums.reduce((accumulator, value) => accumulator + value, 0);

const objectReduced = nums.reduce((accumulator, value, index) => {
  return (accumulator = {
    ...accumulator,
    [`key${index + 1}`]: value,
  });
}, {});

console.log(sum);
console.log(objectReduced);

console.log("\n==========================MAP: POLYFILL==========================");

Array.prototype.ownMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const addTen = nums.ownMap((value) => value + 10);
console.log(addTen);

console.log("\n==========================FILTER: POLYFILL==========================");

Array.prototype.ownFilter = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const lessThanThree = nums.ownFilter((value) => value < 3);
console.log(lessThanThree);

console.log("\n==========================REDUCE: POLYFILL==========================");

Array.prototype.ownReduce = function (callback, startingValue) {
  let accumulator = startingValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const sumValues = nums.ownReduce((accumulator, value) => accumulator + value, 0);

const objectCreated = nums.ownReduce((accumulator, value, index) => {
  return (accumulator = {
    ...accumulator,
    [`key${index + 1}`]: value,
  });
}, {});

console.log(sumValues);
console.log(objectCreated);
