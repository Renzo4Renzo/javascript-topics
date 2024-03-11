/*
    SPREAD OPERATOR (...)
    Expand iterables (arrays, strings, maps, sets) and objects into a list.
    Should be at the right side of assignements or when calling functions.
*/

console.log("===============SPREAD OPERATOR============");
const arr = [7, 8, 9];
const newArray = [1, 2, ...arr];

console.log(newArray);
console.log(...newArray);

console.log("\n===============COPY ARRAY============");
const menu = ["Pizza", "Rissoto", "Lasagna"];
const mainMenuCopy = [...menu];
console.log(mainMenuCopy);

console.log("\n===============JOINING ARRAYS============");
const arrayToJoin1 = [1, 2, 3];
const arrayToJoin2 = [4, 5, 6];
const arrayJoined = [...arrayToJoin1, ...arrayToJoin2];
console.log(arrayJoined);

console.log("\n===============SPREAD OPERATOR WITH STRINGS============");
const stringRenzo = "Renzo";
const letters = [...stringRenzo];
console.log(letters);

console.log("\n===============ONLY USE IT IN PLACES WHERE VALUES COULD BE SEPARATED BY COMMAS============");
const stringRandom = "Random";
console.log(`${[...stringRandom]}`);
// console.log(`${...stringRandom}!`); //Error!

console.log("\n===============SPREAD IN FUNCTION ARGUMENTS============");
orderPasta = function (ingredient1, ingredient2, ingredient3) {
  console.log(`Here is your pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}`);
};

const ingredients = ["Cheese", "Bacon", "Tomato"];
orderPasta(...ingredients);

console.log("\n===============SPREAD IN OBJECTS============");
const person1 = { name: "John", age: 22 };
const person2 = { ...person1, name: "Joanna" };
console.log("Person2:", person2);
