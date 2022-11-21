// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// let {generateMarkdown, generateLicenseBadge} = require("./utils/generateMarkdown")
let generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title of README',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description of README',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        let generatedString = generateMarkdown(answers)
        fs.writeFileSync('README.md', generatedString, function(err) {
            if (err) console.log(err)
            console.log("README generated successfully")
        })

    })
}

// Function call to initialize app
init();
