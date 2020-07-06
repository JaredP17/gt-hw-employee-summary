const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./lib/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const employees = [];
const render = require("./lib/htmlRenderer");

const writeToFile = (path, data) => {
    return new Promise(function (resolve, reject) {
      fs.writeFile(path, data, (err) => {
        if (err) {
          return reject(err);
        }
  
        resolve("Success!");
      });
    });
  }

const addMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "addMember",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members.",
        ],
        default: "(Use arrow keys)",
      },
    ])
    .then(({ addMember: choice }) => {
      //   console.log(choice);
      switch (choice) {
        case "Engineer":
          inquirer
            .prompt(questions.engineerQuestions)
            .then((data) => {
              const { name, id, email, github } = data;
              const engineer = new Engineer(
                name.trim(),
                id.trim(),
                email.trim(),
                github.trim()
              );
              employees.push(engineer);
            })
            .then(() => {
              addMember(); // Prompt for more users.
            })
            .catch((err) => {
              console.log(err);
            });
          break;

        case "Intern":
          inquirer
            .prompt(questions.internQuestions)
            .then((data) => {
              const { name, id, email, school } = data;
              const intern = new Intern(
                name.trim(),
                id.trim(),
                email.trim(),
                school.trim()
              );
              employees.push(intern);
            })
            .then(() => {
              addMember(); // Prompt for more users.
            })
            .catch((err) => {
              console.log(err);
            });
          break;

        default:
          //   console.log(employees);
          writeToFile(outputPath, render(employees));
          break;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
console.log("Please build your team.");
// Inquirer prompts for manager
inquirer
  .prompt(questions.managerQuestions)
  .then((data) => {
    const { name, id, email, office } = data;
    const manager = new Manager(
      name.trim(),
      id.trim(),
      email.trim(),
      office.trim()
    );
    employees.push(manager);
  })
  .then(() => {
    addMember();
  })
  .catch((err) => {
    console.log(err);
  });

// Inquirer prompt for other employees

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ``` << DONE
