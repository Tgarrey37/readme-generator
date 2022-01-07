// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//  User input .
// make a string of the user data in markdown format.
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "What is the command to install dependencies: ",
  },
  {
    type: "input",
    name: "usage",
    message: "What can this project be used for?",
  },
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: ["Apache", "GNU", "MIT", "Open"],
  },
  {
    type: "input",
    name: "contribution",
    message: "List the contributors:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the command to run tests?",
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? ",
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: ",
  },
];

// TODO: Create a function to write README file
function createMarkdownFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) throw error;
    console.log("File Created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const markdownString = generateMarkdown(response);
    createMarkdownFile("test.md", markdownString);
  });
}

// Function call to initialize app
init();
