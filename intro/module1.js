"use strict";
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
exports.__esModule = true;
var Person3 = /** @class */ (function () {
    function Person3(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person3.prototype.getDetails = function () {
        return this.fname + " " + this.lname;
    };
    return Person3;
}());
exports.Person3 = Person3;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getDetails = function () {
        return " Manager: " + _super.prototype.getDetails.call(this);
    };
    return Manager;
}(Person3));
//now we have few cases to deeply dug through this case
//sol 1
function echoperson(e) {
    return e;
}
echoperson(new Person3("will", "smith"));
//but the return type is person
//if we want the childern of type person then we can use generics
function echopersonchildren(e) {
    return e;
}
//now echo perfectly accepts children of Person3 and retur same.
var bw = echopersonchildren(new Manager("Bruce", "wills"));
