/*
    WHAT IS?
    A template for creating objects.
    In Javascript, they are built on prototypes.

    INSTANCE METHODS
    Methods inherited to the instances of the class via prototypes.

    STATIC METHODS
    Methods not inherited to the instances of the class: they are not in their prototypes. 
    They can only be triggered from the class itself.

    PUBLIC/PRIVATE METHODS AND FIELDS
    Public methods/fields: Accesible outside of the class
    Private methods/fields: NOT accesible outside of the class
    These can be made static just by adding the static keyword in front of them.
*/

// CLASS EXPRESSION
console.log(`\n============CLASS EXPRESSION============`);

const PersonCE = class {
  constructor(firstName) {
    this.firstName = firstName;
  }
};

const thomas = new PersonCE("Thomas");
console.log(thomas);

// CLASS DECLARATION
console.log(`\n============CLASS DECLARATION============`);

class PersonCD {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to the .prototype property
  calcAge() {
    console.log(`${this.firstName} is ${2024 - this.birthYear} years old`);
  }
}

const jessica = new PersonCD("Jessica", 1997);
console.log(jessica);
jessica.calcAge(); //Available in the prototype

console.log(
  "Object.getPrototypeOf(jessica) === PersonCD.prototype:",
  Object.getPrototypeOf(jessica) === PersonCD.prototype
); //true

// GETTERS/SETTERS
console.log(`\n============GETTERS/SETTERS============`);

class Account {
  constructor(owner, movements) {
    this.owner = owner;
    this.movements = movements;
  }

  get latest() {
    return this.movements.slice(-1).pop();
  }

  //BEWARE: If both your setter and your constructor set the same variable, you may have a conflict! You have to create a new variable for the setter in that scenario and retrieve it with a getter.
  set latest(movement) {
    if (movement > 0) {
      this.movements.push(movement);
    }
  }
}

const myAccount = new Account("Renzo", [200, 500, 100, 300]);
console.log("myAccount.latest:", myAccount.latest);
myAccount.latest = -10; //It won't add anything because it didn't comply the validation
myAccount.latest = 50;
console.log("myAccount.latest:", myAccount.latest);

// STATIC METHODS
console.log(`\n============STATIC METHODS============`);

class PersonSM {
  constructor(firstName) {
    this.firstName = firstName;
  }

  static hey() {
    console.log("Hey there!");
  }
}

PersonSM.hey();

const walter = new PersonSM("Walter");
// walter.hey(); //TypeError: walter.hey is not a function

// PUBLIC/PRIVATE METHODS
console.log(`\n============PUBLIC/PRIVATE METHODS============`);

class AccountPPM {
  //Public fields (instances)
  locale = "es-ES";

  //Private fields
  #movements = [200, 300];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public methods
  deposit(movement) {
    this.#movements.push(movement);
  }

  withdraw(movement) {
    this.deposit(-movement);
  }

  //Private methods
  #approveLoan() {
    return true;
  }
}

const valeriaAccount = new AccountPPM("Valeria", "EUR", 1111);
valeriaAccount.locale = "es-PE";
//valeriaAccount.#movements.push(200); //Property movements is not accesible outside class
