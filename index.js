// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    message: 'What is the name of your project?',
    name: 'projectName',
  },
  {
    message: 'What is the project about?',
    name: 'projectDesc',
  },
  {
    message: 'What are the installation instructions?',
    name: 'installationInstructions',
  },
  {
    message: 'How do you use the app?',
    name: 'howToUse',
  },
  {
    message: 'What are the contribution guidelines?',
    name: 'guidelines',
  },
  {
    message: 'Are there any test instructions?',
    name: 'testInstructions',
  },
];

inquirer.prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
