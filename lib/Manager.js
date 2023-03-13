// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Gain access to employee

const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Get the office number

    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }

    // change the role to Manager

    getRole() {
        return "Manager";
    }

}

// export the class

module.exports = Manager;

