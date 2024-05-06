/*
    SHALLOW COPY
    A copy of an object that shares the same references with the source object. Therefore, by changing nested objects either in the source or the copy, the other object will change too.

    The Spread syntax, Object.assign(), Object.create() and the array methods concat, slice and from create shallow copies.

    DEEP COPY
    A copy of an object that is completely independent from the source object, so changing one of them doesn't affect the other.

    JSON.parse(JSON.stringify()), structuredClone() and third-party libraries can be used to create deep copies.
*/

console.log("===============SHALLOW COPY WITH SPREAD OPERATOR============");
const shallowOriginalSO = [1, 2, 3, 4];
const shallowCloneSO = [...shallowOriginalSO];
shallowCloneSO.push(5);
console.log("shallowOriginalSO:", shallowOriginalSO);
console.log("shallowCloneSO:", shallowCloneSO);

console.log("\n===============SHALLOW COPY WITH OBJECT.ASSIGN()============");
const shallowOriginalOA = [1, 2, 3, 4];
const shallowCloneOA = Object.assign([], shallowOriginalOA);
shallowCloneOA.push(5);
console.log("shallowOriginalOA:", shallowOriginalOA);
console.log("shallowCloneOA:", shallowCloneOA);

console.log("\n===============NESTED ARRAYS============");
const shallowOriginalNA = [1, 2, 3, 4];
const shallowNestedNA = [5, 6, 7];
shallowOriginalNA.push(shallowNestedNA);
const shallowCloneNA = [...shallowOriginalNA];
shallowNestedNA.push(8);
console.log("shallowOriginalNA:", shallowOriginalNA);
console.log("shallowCloneNA:", shallowCloneNA); //They have the same values in the nested property!

console.log("\n===============OBJECT.FREEZE() CREATES SHALLOW COPIES TOO============");
const shallowOriginalOF = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2, c: 3 },
};
Object.freeze(shallowOriginalOF);
const shallowCloneOF = Object.assign({}, shallowOriginalOF);
shallowOriginalOF.first = 40; //Doesn't apply the change!
shallowOriginalOF.third.a = 10; //Applies the change!
console.log("shallowOriginalOF:", shallowOriginalOF);
console.log("shallowCloneOF:", shallowCloneOF);

console.log("\n===============DEEP COPY WITH JSON.PARSE(JSON.STRINGIFY())============");
//NOTICE: This does't work with dates, functions, Maps, Sets and other complex data types
const deepOriginalDC = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2, c: 3 },
};
const deepCloneDC = JSON.parse(JSON.stringify(deepOriginalDC));
deepCloneDC.first = 30;
deepCloneDC.third.d = 10;
console.log("deepOriginalDC:", deepOriginalDC);
console.log("deepCloneDC:", deepCloneDC);

console.log("\n===============DEEP COPY: STRUCTUREDCLONE() ============");
const deepOriginalSC = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2, c: 3 },
};
const deepCloneSC = structuredClone(deepOriginalSC);
deepCloneSC.first = 30;
deepCloneSC.third.d = 10;
console.log("deepOriginalSC:", deepOriginalSC);
console.log("deepCloneSC:", deepCloneSC);

console.log("\n===============DEEP COPY: OWN FUNCTION============");

const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;
  const newObject = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    const value = obj[key];
    newObject[key] = deepClone(value);
  }
  return newObject;
};

const deepOriginalOF = { key1: 20, key2: 30, key3: [1, 2, 3] };
const deepCloneOF = deepClone(deepOriginalOF);

deepCloneOF.key1 = 10;
deepCloneOF.key3.push(4);
console.log("deepOriginalOF:", deepOriginalOF);
console.log("deepCloneOF:", deepCloneOF);
