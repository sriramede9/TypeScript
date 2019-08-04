import { Person3 } from "../intro/module1";

class Manager extends Person3 {
  getDetails() {
    return `MGR: ${super.getDetails()}`;
  }
}

let jeff: Manager = new Manager("Jeff", "Bez");

console.log(jeff.getDetails());
