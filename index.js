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
        message: 'Provide title of README',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage instructions.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide the contribution guidelines.The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you prefer.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide tests for your application',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose license',
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License', "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0", "The Unlicense"]   
    },
    {
        type: 'input',
        name: 'username',
        message: 'Provide your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email',
    },
];

// console.log(questions[6].choices)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers.license)
        let generatedString = generateMarkdown(answers)
        fs.writeFile('README.md', generatedString, (err) => 
            err ? console.error(err) : console.log("README generated successfully")
        )
    })
}

// Function call to initialize app
init();
