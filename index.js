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
        choices: ["none", "Apache_2.0", "GPLv3", "MIT", "BSD_2--Clause",
        "BSD_3--Clause", "Boost_1.0", "CC0_1.0", "EPL_1.0",
        "AGPL_v3", "GPL_v2", "LGPL_v2",
        "MPL_2.0", "Unlicense"]
       
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
        // let generatedLicense = renderLicenseBadge(answers.license)
        // fs.appendFile('README.md', generatedLicense, (err) => 
        //     err ? console.error(err) : console.log("License generated successfully")
        // )
    })
}

// Function call to initialize app
init();
