// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questionsForPrompt = [
    "1. Enter a project title: ",
    "2. Enter a project description: ",
    "3. Enter installation instructions: ",
    "4. Enter contribution guidelines",
    "5. Enter test instructions",
    "6. Choose the license from the options below",
    "7. Enter your gitHub username: ",
    "8. Enter email address: ",
];

const licenseChoices = [
        "GPL", 
        "MIT", 
        "Educational", 
        "Creative Commons", 
        "Unlicense"
]

// TODO: Create a function to write README file
function writeReadme(dataToWrite) {

    fs.appendFile('./Readme.txt', dataToWrite+"\n", (err) => err ? console.error(err) : console.log('PV: Readme Created'));

}

// TODO: Create a function to initialize app
function init() {

    fs.writeFile('./Readme.txt', "", (err) => err ? console.error(err) : console.log('\nPV: Readme Created\n'));

    console.log(generateMarkdown({title: "\nthis is a title\n"}));

    inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: questionsForPrompt[0],
        },
        {
            type: "editor",
            name: "description",
            message: questionsForPrompt[1],
        },
        {
            type: "editor",
            name: "installation",
            message: questionsForPrompt[2],
        },
        {
            type: "editor",
            name: "usage",
            message: questionsForPrompt[3],
        },
        {
            type: "editor",
            name: "tests",
            message: questionsForPrompt[4],
        },
        {
            type: "list",
            name: "license",
            message: questionsForPrompt[5],
            choices: licenseChoices
        },
        {
            type: "input",
            name: "gitHub",
            message: questionsForPrompt[6],
        },
        {
            type: "input",
            name: "email",
            message: questionsForPrompt[7],
        },

    ])
    .then((answers) => {

        writeReadme(generateMarkdown(answers));
        
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong");
        }
    });

    console.log('here now2');

}

// Function call to initialize app
init();
