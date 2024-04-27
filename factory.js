/* 
    WHAT IS?
    A function that creates and returns an object. 
    It's useful to create objects that have the same properties/methods.
    It doesn't use the "new" keyword.
*/

console.log("=========FACTORY: OBJECT METHODS ARE CREATED IN EACH INSTANCE (NOT MEMORY-EFFICIENT)===========");
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + " " + lastName;
    },
  };
}

let person1 = createPerson("Renzo", "Diaz");
let person2 = createPerson("Valeria", "Diaz");

console.log(person1.getFullName());
console.log(person2.getFullName());

console.log("\n=========FACTORY: PROTOTYPE ASSIGNED TO EACH INSTANCE (MEMORY-EFFICIENT)===========");
const personActions = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

function createPersonV2(firstName, lastName) {
  let person = Object.create(personActions);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}

let person3 = createPersonV2("Angie", "Segura");
let person4 = createPersonV2("Diego", "Viera");

console.log(person3.getFullName());
console.log(person4.getFullName());
