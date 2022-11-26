// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// create an array of license badges

// let licenseBadgesArray = ["", "License-Apache_2.0-blue", "License-GPLv3-blue", "License-MIT-yellow", "License-BSD_2--Clause-orange",
// "License-BSD_3--Clause-blue", "License-Boost_1.0-lightblue", "License-CC0_1.0-lightgrey", "License-EPL_1.0-red",
// "License-AGPL_v3-blue", "License-GPL_v2-blue", "License-LGPL_v2-blue",
// "License-MPL_2.0-brightgreen", "license-Unlicense-blue"];
// console.log(licenseBadgesArray)

// function renderLicenseBadge(licenseBadgesArray) {
//   if (licenseBadgesArray !== "None") {
//     return `https://img.shields.io/badge/${licenseBadgesArray}.svg`
//   }
// }
function renderLicenseBadge(license) {
  console.log(license)
  if (license !== "none") {
    return `https://img.shields.io/badge/License-${license}-green.svg`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // console.log(`data generateMarkdown`)
    // console.log(data)
  return `# ${data.title}

![GitHub license](${renderLicenseBadge(data.license)})

## Description
- ${data.description}

## Installation
- ${data.installation}

## Usage 
- ${data.usage}

## License
- This application is covered under the ${data.license} license.

## Contribution
- ${data.contribution}

## Tests
- ${data.test}

`;
}

module.exports = generateMarkdown

// module.exports = {
//     generateMarkdown: generateMarkdown,
//     generateLicenseBadge: renderLicenseBadge,
// };

// if (data.license === "mit") {
//   return licenseArray[1]
// }

// let choice = ["MIT", "APACHE"];
// let license = ["mit-link", "apache-link"]
// let result = license[choice.indexOf("MIT")];