/*
  WHAT IS?
  A constructor function creates and initializes an object instance (of a class).

  WHAT HAPPENS WHEN A CONSTRUCTOR IS CALLED?
  1 .A new empty object gets created.
  2. The this keyword points to the new object and it becomes the current instance object.
  3. The new object is returned as the return value of the constructor.

  WHEN A CONSTRUCTOR IS NOT PROVIDED IN A CLASS:
  A default constructor will be supplied:
  - Base class. Empty constructor.
  - Derived class. It calls the parent constructor passing any arguments provided.

  CONSTRUCTORS VS OBJECT LITERALS
  Constructors create unique objects, while copying an object literal creates a clone. So, for the latter, any change you make in one object will affect the other object.

  CONSTRUCTORS VS FACTORIES
  Constructors allows you to put properties/methods in the prototype, factories don't. 

  NOTE: Generators are not constructable.
*/

// CONSTRUCTOR FUNCTION
console.log(`============CONSTRUCTOR FUNCTION============`);

function Person(personName, personAge) {
  this.name = personName;
  this.age = personAge;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const diego = new Person("Diego", 27);
const valeria = new Person("Valeria", 26);

diego.greet();
valeria.greet();

//CONSTRUCTORS VS OBJECT LITERALS
console.log(`\n============CONSTRUCTORS VS OBJECT LITERALS============`);

let personObj = {
  name: "Sam",
};

let student1 = personObj;
let student2 = personObj;

student1.name = "John";
console.log("student2.name:", student2.name); // It was updated to "John" unintentionally!

function PersonCon(personName) {
  this.name = personName;
}

let person1 = new PersonCon("Sam");
let person2 = new PersonCon("Mar");

person1.name = "Rick";
console.log("person2.name:", person2.name); //It stays the same!
