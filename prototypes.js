/*
  PROTOTYPE
  It is a template to create new objects. 
  It's a built-in property: every object has a prototype.

  ACCESING THE PROTOTYPE
  Using the Object.getPrototypeOf() method (__proto__ works in browsers, but is not standard).
  Using the .prototype property in constructor functions.

  PROTOTYPE CHAIN
  - Each prototype is itself an object, so it has its own prototype. This creates a chain of prototypes.
  - The end of the chain is reached when a prototype with a "null" value is found.
  - When you try to access a property of an object, if the property is not found in the object, the prototype is searched. If not there, the search continues through the prototype chain. If the end is reached and the property is not found, "undefined" is returned.

  ASSIGNING PROTOTYPES
  -To classes
  -To constructor functions
  -To objects: Using Object.create() and Object.setPrototypeOf()

  OWN PROPERTIES
  Properties defined in the object that are not in the prototype. You can use Object.hasOwn() to check if a property belongs to the object.

  SHADOWING PROPERTIES
  If a property with the same name is defined several times in the prototype chain, then the outermost is the one that will be called.
*/

// EVERY OBJECT HAS A PROTOTYPE
console.log(`\n============EVERY OBJECT HAS A PROTOTYPE============`);

const dude = {};
console.log("dude:", Object.getPrototypeOf(dude));
console.log(dude.toString); //This function comes from the prototype

const array = [];
console.log("array:", Object.getPrototypeOf(array));
console.log(array.map); //This function comes from the prototype

// ASSIGNING PROTOTYPES: CLASSES (Syntactic sugar)
console.log("============ASSIGNING PROTOTYPES: CLASSES============");
class PersonSS {
  talk() {
    return console.log("Talking...");
  }
}

const meSS = new PersonSS();
const youSS = new PersonSS();

meSS.talk();
youSS.talk();

PersonSS.prototype.talk = function talk() {
  return console.log("Talking MORE..");
};

meSS.talk();

// ASSIGNING PROTOTYPES: OBJECTS
console.log("\n============ASSIGNING PROTOTYPES: OBJECTS============");
const personObject = {
  talk() {
    return console.log("Talking...");
  },
};

const me5 = Object.create(personObject);
me5.talk();

const me6 = {};
Object.setPrototypeOf(me6, personObject);
me6.talk();

//ASSIGNING PROTOTYPES: CONSTRUCTOR FUNCTION
console.log(`\n============ASSIGNING PROTOTYPES: CONSTRUCTOR FUNCTION============`);

function DudeC(someName) {
  this.name = someName;
}

const vale1 = new DudeC("vale1");
console.log("vale1:", vale1);

DudeC.prototype.talk = function () {
  return console.log("Talking...");
};

console.log("Object.getPrototypeOf(vale1):", Object.getPrototypeOf(vale1)); //This one lives in the instance
console.log("DudeC.prototype:", DudeC.prototype); //This one lives in the CONSTRUCTOR FUNCTION!
console.log("Object.getPrototypeOf(vale1) === DudeC.prototype:", Object.getPrototypeOf(vale1) === DudeC.prototype); //They are equivalent!

// SCENARIOS WITH NO PROTOTYPE INHERITANCE
console.log("\n============SCENARIOS WITH NO PROTOTYPE INHERITANCE============");
// 1
function PersonFP2() {
  //Using the "this" keyword, talk() won't be in the prototype
  this.talk = function () {
    console.log("Talking loud...");
  };
}
console.log("PersonFP2.prototype.talk:", PersonFP2.prototype.talk); //undefined

const youFP2 = new PersonFP2();
youFP2.talk();

// 2
function Person3() {
  this.age = 12;
}

const me3 = new Person3();

Person3.age = 40;
console.log("Person3:", Person3);

console.log("Person3.prototype.age:", Person3.prototype.age); //undefined
console.log("me3:", me3); // Still 12, not 40

// INHERITANCE IN CONSTRUCTOR FUNCTIONS
console.log("\n============INHERITANCE IN CONSTRUCTOR FUNCTIONS============");

const PersonICF = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonICF.prototype.calculateAge = function () {
  console.log(`${this.firstName} is ${2024 - this.birthYear} years old`);
};

const Student = function (firstName, birthYear, course) {
  PersonICF.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(PersonICF.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2000, "Computer Science");
mike.introduce();
mike.calculateAge();

// EXTENDING CLASSES
console.log("\n============EXTENDING CLASSES============");
class PersonSS4 {
  talk() {
    return console.log("Talking...");
  }
}

const renzoSS4 = new PersonSS4();
renzoSS4.talk();

class SuperHumanSS4 extends PersonSS4 {
  fly() {
    return console.log("Flying...");
  }
}

const diegoSS4 = new SuperHumanSS4();
diegoSS4.talk();
diegoSS4.fly();
// renzoSS4.fly(); //Error!

// PROTOTYPE CHAIN: SHADOWING PROPERTIES
console.log(`\n============PROTOTYPE CHAIN: SHADOWING PROPERTIES============`);

const human = {
  kind: "Human",
};

const adult = Object.create(human);
adult.age = 33;
console.log("adult:", adult);
console.log("adult.kind:", adult.kind);

const renzo = Object.create(adult);
renzo.age = 26; //Shadowing Properties!
console.log("renzo:", renzo);
console.log("renzo prototype:", Object.getPrototypeOf(renzo));
console.log("renzo.kind:", renzo.kind);
