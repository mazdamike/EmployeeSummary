// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

getName() {
const name = this.name;
return name;
}
getId() {
const id = this.id;
return id;
}
getEmail() {
const email = this.email;
return email;
}
getRole() {
  return "Employee";
} // Returns 'Employee'

}

module.exports = Employee;