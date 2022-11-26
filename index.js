// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// let {generateMarkdown, generateLicenseBadge} = require("./utils/generateMarkdown")
let generateMarkdown = require("./utils/generateMarkdown")
let generateLicenseBadge = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title of README',
    },
    // {
    //     type: 'input',
    //     name: 'description',
    //     message: 'Enter description of README',
    // },
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'Enter the installation instructions',
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Enter the usage information',
    // },
    // {
    //     type: 'input',
    //     name: 'contribution',
    //     message: 'Enter the contribution guidelines',
    // },
    // {
    //     type: 'input',
    //     name: 'test',
    //     message: 'Enter the test instructions',
    // },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose license',
        choices: ["none", "Apache-2.0", "GNU-General-Public-v3.0", "MIT", "BSD-2-Clause",
        "BSD-3-Clause", "Boost-Software-1.0", "Creative-Commons-Zero-v1.0-Universal", "Eclipse Public",
        "GNU-Affero-General-Public-v.3.0", "GNU-General-Public-v.2.0", "GNU-Lesser-General-v2.1",
        "Mozilla-Public-2.0", "The-Unlicense"]
       
    },
];

// console.log(questions[6].choices)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        let generatedString = generateMarkdown(answers)
        fs.writeFile('README.md', generatedString, (err) => 
            err ? console.error(err) : console.log("README generated successfully")
        )
    })
}

// Function call to initialize app
init();
