// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input
const questionsForPrompt = [
    "1. Enter a project title: ",
    "2. Enter a project description: ",
    "3. Enter installation instructions: ",
    "4. Enter usage instructions: ",
    "5. Choose the license from the options below",
    "6. Enter contribution guidelines",
    "7. Enter test instructions",
    "8. Enter your gitHub username: ",
    "9. Enter email address: ",
];

const licenseChoices = [
        "GNU GPL v3", 
        "GNU GPL v2", 
        "The Hippocratic License 3.0", 
        "The MIT License", 
        "Mozilla Public License 2.0",
        "Public Domain Dedication and License (PDDL)",
        "The Artistic License 2.0",
]

// Function to write README file
function writeReadme(dataToWrite) {

    fs.appendFile('./Readme.md', dataToWrite+"\n", (err) => err ? console.error(err) : "");

}

// Function to initialize app
function init() {

    fs.writeFile('./Readme.md', "", (err) => err ? console.error(err) : "");
  
    inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            //1. Enter a project title: 
            message: questionsForPrompt[0],
        },
        {
            type: "editor",
            name: "description",
            //2. Enter a project description:
            message: questionsForPrompt[1],
        },
        {
            type: "editor",
            name: "installation",
            //3. Enter installation instructions: 
            message: questionsForPrompt[2],
        },
        {
            type: "editor",
            name: "usage",
            //4. Enter usage instructions:
            message: questionsForPrompt[3],
        },
        {
            type: "list",
            name: "license",
            //5. Choose the license from the options below
            message: questionsForPrompt[4],
            choices: licenseChoices
        },
        {
            type: "editor",
            name: "contributing",
            //6. Enter contribution guidelines
            message: questionsForPrompt[5],
        },
        {
            type: "editor",
            name: "tests",
            //7. Enter test instructions
            message: questionsForPrompt[6],
        },
        {
            type: "input",
            name: "gitHub",
            //8. Enter your gitHub username: 
            message: questionsForPrompt[7],
        },
        {
            type: "input",
            name: "email",
            //9. Enter email address: 
            message: questionsForPrompt[8],
        },

    ])
    .then((answers) => {

        //use generateMarkdown to populate the template using answers
        //use writeReadme to write the populated template to the local file
        writeReadme(generateMarkdown(answers));
        
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong");
        }
    });

}

// Function call to initialize app
init();
