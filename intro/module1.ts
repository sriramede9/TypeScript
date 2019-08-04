export class Person3 {
  constructor(private fname: string, private lname: string) {}

  getDetails() {
    return `${this.fname} ${this.lname}`;
  }
}

class Manager extends Person3 {
  getDetails() {
    return ` Manager: ${super.getDetails()}`;
  }
}

//now we have few cases to deeply dug through this case

//sol 1

function echoperson(e: Person3): Person3 {
  return e;
}

echoperson(new Person3("will", "smith"));

//but the return type is person

//if we want the childern of type person then we can use generics

function echopersonchildren<T extends Person3>(e: T): T {
  return e;
}

//now echo perfectly accepts children of Person3 and retur same.

let bw: Manager = echopersonchildren(new Manager("Bruce", "wills"));
