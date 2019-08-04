var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = { firstname: "Sri", lastname: "ram" };
//in javascript we can add another unrelated property to the person person.fly="flying";it will add to the object.loosely coupled.
//we stuck in java script as browser are build to run js.
//we can write in ts and when it compiled to goes to js and runs.
var variable = 3;
var fname = "Sri";
var x = 3;
// x="String"; error as it is already of type number
var y;
console.log(typeof y); //should be any for now and if it given a string it will be of type string and int will be int and bool will be of type boolen
//we can also use template Strings.
var lname = "ram";
var fullname = fname + " " + lname;
var intarray = [1, 2, 3, 4, 5]; //takes and accepts only numbers.
var stringarray = ["a", "b", "c", "d"];
//second way is using generic array type
var genericnumberearray = [2, 1, 2, 1];
//btw we have tuples
var thistuple;
thistuple = [1, "sri"];
console.log(thistuple[0]); //can do number operations
console.log(thistuple[1]); //can do string operations.
//enum like java
var menu;
(function (menu) {
    menu[menu["burger"] = 0] = "burger";
    menu[menu["fries"] = 1] = "fries";
})(menu || (menu = {}));
var myordrer = menu.burger;
//power of any
var g1;
g1 = 10; //works
g1 = "String";
//console.log(g);
//also when we need array of mixed obj's
var mixarray;
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
function add(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b;
}
add(2, 3);
//variable capturing quirks.
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        //  console.log(i);
    }, 100 * i);
}
//here output is 10
for (var i_1 = 0; i_1 < 10; i_1++) {
    setTimeout(function () {
        //console.log(i);
    }, 100 * i_1);
} //here ouput is 0.1..10
//we can give options to type as well
var optational;
//classes and functions.
var Person1 = /** @class */ (function () {
    function Person1(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    Person1.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    return Person1;
}());
var aperson = new Person1("a", "b");
// aperson.firstname = "hero";
// aperson.lastname = "one";
console.log(aperson.getFullName());
//inheritance in typescript
var Person2 = /** @class */ (function () {
    function Person2(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    Person2.prototype.greet = function () {
        return "Hello " + this.firstname + " " + this.lastname;
    };
    return Person2;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.greet = function () {
        return _super.prototype.greet.call(this) + " how you doing?";
    };
    return Customer;
}(Person2));
var cust1 = new Customer("k", "l");
console.log(cust1.greet());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.getdetails = function () {
        return "This Animal name is " + this.name + " and is of color " + this.color + " and is of age " + this.age;
    };
    return Dog;
}());
var dog = new Dog(); //polymorphishm subtype supertype
//ducktyping
var objduck = {
    name: "Test",
    age: 23,
    color: "blue",
    getdetails: function () {
        return "test";
    },
    canhaveextraprops: "extra"
};
//if swims like a duck and quack likes a duck it is a duck
dog = objduck;
//let's tack about geters and setters.
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.setModel = function (data) {
        this.model = data;
    };
    Phone.prototype.setImeinum = function (data) {
        this.imeinum = data;
    };
    Phone.prototype.getModel = function () {
        return this.model;
    };
    Phone.prototype.getImeinum = function () {
        return this.imeinum;
    };
    return Phone;
}());
var iphone = new Phone();
iphone.setModel("7");
iphone.setImeinum("aegh332");
console.log(iphone.getModel());
