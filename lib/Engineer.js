// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    // Get the GitHub

    getGithub() {
        console.log(this.gitHub);
        return this.gitHub;
    }

    // change the role to Engineer

    getRole() {
        return "Engineer";
    }

}

// export the class

module.exports = Engineer;