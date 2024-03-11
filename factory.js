/* 
    WHAT IS?
    A function that creates and returns an object. 
    It's useful to create objects that have the same properties/methods.
    It doesn't use the "new" keyword.
*/

//Method 1: It works, but each object created has a copy of getFullName() which is not memory-efficient
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

//Method 2: Using Object.create() to assign the prototype to the object, this is memory -efficient
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
