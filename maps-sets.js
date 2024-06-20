/*
    MAP
    A collection of key/value pairs that allows any value as a key (unlike objets who only accepts strings and symbols).
    Entries can be iterated in insertion order.
    They have better performance than plain objects for insertion/retrieval/deletion operations.

    SET
    A collection of values where each value is unique (no duplicates are allowed). 
    Values can be iterated in insertion order.
    They have better performance than arrays for insertion/retrieval/deletion operations.
*/

console.log("=============MAPS: ANY VALUE CAN BE A KEY=============");
let mapMultipleKeyTypes = new Map();

mapMultipleKeyTypes.set(1, "number1"); // a numeric key
mapMultipleKeyTypes.set(true, "boolean1"); // a boolean key

let johnKey = { name: "John" };
mapMultipleKeyTypes.set(johnKey, "johntext1"); // an object key

console.log("Key: 1, Value:", mapMultipleKeyTypes.get(1));
console.log("Key: true, Value:", mapMultipleKeyTypes.get(true));
console.log(`Key: { name: "John" }, Value:`, mapMultipleKeyTypes.get(johnKey));

console.log("\n=============MAPS: SET METHODS CAN BE CHAINED=============");

let mapChaining = new Map();
mapChaining.set(1, "number1").set(2, "number2").set(3, "number3");

console.log("MapChaining:", mapChaining);

console.log("\n=============MAPS: ITERATION=============");

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys
console.log("<Map.Keys()>");
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

// iterate over values
console.log("\n<Map.Values()>");
for (let amount of recipeMap.values()) {
  console.log(amount);
}

// iterate over [key, value] entries
console.log("\n<Map.Entries()>");
for (let entry of recipeMap.entries()) {
  // recipeMap === recipeMap.entries()
  console.log(entry);
}

console.log("\n<Map.forEach()>");
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

console.log("\n=============MAPS: CREATING A MAP USING OBJECT.ENTRIES()=============");

let objToMap = {
  name: "John",
  age: 30,
};

let mapWithObjectEntries = new Map(Object.entries(objToMap));

console.log("mapWithObjectEntries:", mapWithObjectEntries);

console.log("\n=============MAPS: CREATING AN OBJECT USING OBJECT.FROMENTRIES()=============");

let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

let objFromMap = Object.fromEntries(map.entries());
console.log("objFromMap:", objFromMap);

console.log("\n=============SETS: NO DUPLICATES ALLOWED=============");

let setWithNoDupes = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

setWithNoDupes.add(john);
setWithNoDupes.add(pete);
setWithNoDupes.add(mary);
setWithNoDupes.add(john);
setWithNoDupes.add(mary);

console.log(setWithNoDupes);

console.log("\n=============SETS: ITERATION=============");

let setFruits = new Set(["Oranges", "Apples", "Bananas"]);

console.log("<Set.values()>");
for (let value of setFruits.values()) {
  console.log(`Value: ${value}`);
}

console.log("\n<Set.forEach()>");
// For sets, there are no "keys", but key === value for compatibility with Map
setFruits.forEach((key, value, setFruits) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
