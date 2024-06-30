// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    message: 'What is the name of your project?',
    name: 'title',
  },
  {
    message: 'What is the project about?',
    name: 'description',
  },
  {
    message: 'What are the installation instructions?',
    name: 'installation',
  },
  {
    message: 'How is the app used?',
    name: 'usage',
  },
  {
    message: 'What license would you like to apply?',
    name: 'license',
    type: 'list',
    choices: [
      {
        name: 'No license',
        value: '',
        url: '',
      },
      {
        name: 'Apache',
        value: 'Apache',
      },
      {
        name: 'Creative Commons Licenses',
        value: 'CCL',
      },
      {
        name: 'GNU (GPL)',
        value: 'GNU',
      },
      {
        name: 'MIT',
        value: 'MIT',
      },
      {
        name: 'Mozilla (MPL)',
        value: 'Mozilla',
      },
    ],
  },
  {
    message: 'What are the contribution guidelines?',
    name: 'contributions',
  },
  {
    message: 'Are there any test instructions?',
    name: 'testInstructions',
  },
  {
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    message: 'What is your email address?',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) {
      console.error('Error writing HTML to index.html:', err);
    } else {
      console.log(`Successfully wrote HTML`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile('README-Sample.md', response));
}

// Function call to initialize app
init();
