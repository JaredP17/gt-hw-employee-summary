// Validate input functions
// Checks for empty strings
const isEmpty = (input) => input.trim() === "";

// Validate name inputs
const validateName = (name) => isEmpty(name) ? "No input detected." : true;

// Validate ID inputs
const validateId = (id) => {
  if (!Number.isInteger(Number(id)) || parseInt(id) <= 0 || isEmpty(id)) {
    return "Please enter a positive number greater than zero.";
  } else return true;
};

// Validate Email inputs
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email) ? true : "Please enter a valid email.";
};

const validateExtra = (extra) => {};

// Employee question arrays
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
    validate: validateId,
  },
  {
    type: "input",
    message: "What is your manager's email?",
    name: "email",
    validate: validateEmail,
  },
];
const engineerQuestions = [];
const internQuestions = [];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
};
