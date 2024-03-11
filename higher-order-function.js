/*
    WHAT IS?
    It takes a FUNCTION as a parameter AND/OR returns a function.

    EXAMPLES
    SetTimeout()
    Array methods: filter, foreach, map, reduce, sort
*/

/*Taking function as a parameter */
const names = ["Renzo", "Diego", "Ibeth"];
const filteredNames = names.filter((name) => name[0].toUpperCase() !== "R");
console.log(`Filtered names: ${filteredNames}`);

/* Returns a function - NOTE: This a closure too*/
function clickHandler(size) {
  return function () {
    console.log(`My size is ${size}px`);
  };
}

buttonSize12 = clickHandler(12);
buttonSize12();
