// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Get the School

    getSchool() {
        console.log(this.school);
        return this.school;
    }

    // change the role to Intern

    getRole() {
        return "Intern";
    }

}

// export the class

module.exports = Intern;