var Person = { firstname: "Sri", lastname: "ram" };
//in javascript we can add another unrelated property to the person person.fly="flying";it will add to the object.loosely coupled.
//we stuck in java script as browser are build to run js.
//we can write in ts and when it compiled to goes to js and runs.

let variable: number = 3;

let fname: string = "Sri";

let x = 3;

// x="String"; error as it is already of type number

let y;

console.log(typeof y); //should be any for now and if it given a string it will be of type string and int will be int and bool will be of type boolen

//we can also use template Strings.

let lname: string = "ram";

let fullname = `${fname} ${lname}`;

let intarray: number[] = [1, 2, 3, 4, 5]; //takes and accepts only numbers.

let stringarray: string[] = ["a", "b", "c", "d"];

//second way is using generic array type

let genericnumberearray: Array<number> = [2, 1, 2, 1];

//btw we have tuples

let thistuple: [number, string];

thistuple = [1, "sri"];

console.log(thistuple[0]); //can do number operations
console.log(thistuple[1]); //can do string operations.

//enum like java

enum menu {
  burger,
  fries
}

let myordrer: menu = menu.burger;

//power of any

let g1: any;

g1 = 10; //works

g1 = "String";

//console.log(g);

//also when we need array of mixed obj's

let mixarray: Array<any>;

mixarray = [1, "2", true];

//void is opposite for functions having any type at all,return type is nothing

//if we assign variable of type void we can iniitalize with null or undefined.

//magic of var scope in function
function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}

var g = f();
g();

//now let's talk about functions.

function add(a: number, b?: number, c: number = 0): number {
  return a + b;
}

add(2, 3);

//variable capturing quirks.

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    //  console.log(i);
  }, 100 * i);
}
//here output is 10

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    //console.log(i);
  }, 100 * i);
} //here ouput is 0.1..10

//we can give options to type as well

let optational: number | string;

//classes and functions.

class Person1 {
  firstname: string;
  lastname: string;

  constructor(fname: string, lname: string) {
    this.firstname = fname;
    this.lastname = lname;
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}

var aperson = new Person1("a", "b");

// aperson.firstname = "hero";
// aperson.lastname = "one";

console.log(aperson.getFullName());
//inheritance in typescript

class Person2 {
  firstname: string;
  lastname: string;

  constructor(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
  }

  greet() {
    return `Hello ${this.firstname} ${this.lastname}`;
  }
}

class Customer extends Person2 {
  greet() {
    return `${super.greet()} how you doing?`;
  }
}

let cust1 = new Customer("k", "l");
console.log(cust1.greet());

//interfaces
interface Animal {
  name: string;
  age: number;
  color: string;
  //no methods on interfaces
  //can define signature

  getdetails(): String;
}

class Dog implements Animal {
  name: string;
  age: number;
  color: string;
  getdetails(): String {
    return `This Animal name is ${this.name} and is of color ${
      this.color
    } and is of age ${this.age}`;
  }
}

let dog: Animal = new Dog(); //polymorphishm subtype supertype

//ducktyping

let objduck = {
  name: "Test",
  age: 23,
  color: "blue",
  getdetails: () => {
    return "test";
  },
  canhaveextraprops: "extra"
};

//if swims like a duck and quack likes a duck it is a duck

dog = objduck;

//let's tack about geters and setters.

class Phone {
  private model;
  private imeinum;

  setModel(data: string) {
    this.model = data;
  }
  setImeinum(data: string) {
    this.imeinum = data;
  }
  getModel() {
    return this.model;
  }
  getImeinum() {
    return this.imeinum;
  }
}

let iphone = new Phone();
iphone.setModel("7");
iphone.setImeinum("aegh332");

console.log(iphone.getModel());

//enums in typescript

enum daysoftheweek {"s","mon"};

let today=daysoftheweek.mon;