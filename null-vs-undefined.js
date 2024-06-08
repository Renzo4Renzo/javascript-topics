/*
    UNDEFINED
    A variable is undefined when no value has been assigned yet to it.

    NULL
    A variable intentionally declared with the assignement value of NULL.
*/

console.log("--------------UNDEFINED--------------");
let xUndefined;
console.log("xUndefined:", xUndefined);
console.log("typeof xUndefined:", typeof xUndefined);

console.log("\n--------------NULL--------------");
let xNull = null;
console.log("xNull:", xNull);
console.log("typeof xNull:", typeof xNull);

console.log("\n--------------CHECKING EQUALITY--------------");
console.log("xUndefined === xNull:", xUndefined === xNull); //Strict equality: false
console.log("xUndefined == xNull:", xUndefined == xNull); //Equality: true (because it performs type coercion)
