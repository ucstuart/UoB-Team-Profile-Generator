const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const team = [];


/* TODO: Write Code to gather information about the development team members, and render the HTML file.

Start: Need to create node project, install inquirer and Jest.

    1. Make a new folder for the project and initialize it as an npm project. 
    - npm init -y

    2. Install the older version of inquirer so that it doesnt break the setup using require().
    Link to doc: https://www.npmjs.com/package/inquirer
    Also, install Jest

    3. Need to change package.json so that it uses jest to test.
        change scripts section to look like this:
            "scripts": {
              "test": "jest --verbose test"
             },

   4. Setup a .gitignore file -> add: node_modules

    - Tests have been written for you already. They can be used to make sure that 
    the lib classes have been created correctly. Run the tests to check. "npm run test"

 output-dir and outputPath have already been setup so we can use both 
 & fs.writeFile() to create the html file when needed. 

 - Need to ask a questions using the inquirer to determine team makeup. The user
 will answer a set of questions and provide the information needed to create objects
 of type Manager, Engineer, & Intern.

 We can use an array to hold the employee objects(manager, engineer, or intern):
  let team = []; // this array will consist of: the output from the inquirer

 how do we use the entity classes above to populate the team array?
  - team.push(new Manager()) 

    when the user has finished adding new team members: 
    we call render() and pass in the team array. (imported above)
     - Render returns a string to us that represents the contents of our html doc. 
        - ex: let html = render(team) -> This is what will be used to write to file. 
        - This will look like this:
          fs.writeFileSync(outputPath, render(teamMembers), "utf-8");

          ex of structure below:    
*/

function start () {

    // function to handle generating manager - first bc we need a manager
    function createManager() {
        inquirer.prompt([
            {
              type: "input",
              name: "managerName",
              message: "What is the team manager's name?",
              validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "Please enter at least one character.";
              }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the Managers ID?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the Managers Email Address?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the Managers Office Number?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
            },
          ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            // push to team array
            team.push(manager);
            // call the next function that will ask what type of employee will be created next
            createTeam();
          })
    }

    // function that asks what type of employee they would like to create next
    function createTeam(){
        // similar setup to what we have listed above
        inquirer.prompt([
            // question asking what we should make next
                // choices(engineer, intern, I dont want to add anything else)
          {
            type: "list",
            name: "EmployeeChoice",
            message: "Please select the team member type you would like to add next, select None if your done!",
            choices: ["Engineer","Intern","None"],
          },
        ]).then(userChoice => {
            /* conditional that decides which of the below functions to call
                based on userChoice. 

                - If none of the choices (engineer or employee) have been chosen default to buildTeam()
               
            */
            // if (userChoice.EmployeeChoice === "Engineer") {
            //   addEngineer();
            // } else if (userChoice.EmployeeChoice === "Intern") {
            //   addIntern();
            // } else {
            //   buildTeam();
            // }
        
            // Using Switch instead of IF

            switch (userChoice.EmployeeChoice) {
              case "Engineer":
                addEngineer();
                break;
              case "Intern":
                addIntern();
                break;
         
              default:
                buildTeam();
            }
            
        })
    }

    // function to handle generating engineer

    function addEngineer() {

      inquirer.prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the Engineers name?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the Engineer ID?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the Engineers Email Address?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the Engineers GitHub?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
        },
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        // push to team array
        team.push(engineer);
        // call the next function that will ask what type of employee will be created next
        createTeam();
      })
}


    

    // function to handle generating intern

    function addIntern() {

      inquirer.prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the Intern name?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        },
        {
            type: "input",
            name: "internId",
            message: "What is the Intern ID?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the Intern Email Address?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the Intern School?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
        },
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        // push to team array
        team.push(intern);
        // call the next function that will ask what type of employee will be created next
        createTeam();
      })
}



    // function to buildTeam - will use fs.writeFileSync & pass in the outputPath created above, call to render (dont forget to pass in the employee array), & "utf-8"

    function buildTeam() {
      fs.writeFileSync(outputPath, render(team),"utf-8");


    }
        
    createManager(); // starts of the whole chain of events. 
}

start();

