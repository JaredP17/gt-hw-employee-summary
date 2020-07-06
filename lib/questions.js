// Validate input functions
// Checks for empty strings
const isEmpty = (input) => input.trim() === "";

// Validate name inputs
const validateName = (name) => isEmpty(name) ? "No input detected." : true;

// Validate ID and other number inputs
const validateNumber = (num) => {
  if (!Number.isInteger(Number(num)) || parseInt(num) <= 0 || isEmpty(num)) {
    return "Please enter a positive number greater than zero.";
  } else return true;
};

// Validate Email inputs
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email) ? true : "Please enter a valid email.";
};

const validateExtra = (extra) => {};

// Manager Questions
const managerQuestions = [
  {
    type: "input",
    message: "What is your manager's name?",
    name: "name",
    validate: validateName,
  },
  {
    type: "input",
    message: "What is your manager's id?",
    name: "id",
    validate: validateNumber,
  },
  {
    type: "input",
    message: "What is your manager's email?",
    name: "email",
    validate: validateEmail,
  },
  {
    type: "input",
    message: "What is your manager's office number?",
    name: "office",
    validate: validateNumber
  }
];

// Engineer Questions
const engineerQuestions = [];

// Intern Questions
const internQuestions = [];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
};
