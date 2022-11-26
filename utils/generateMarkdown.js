// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// create an array of license badges w/ different colors

let licenseChoicesArray = ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 2-Clause "Simplified" License',
'BSD 3-Clause "New" or "Revised" License', "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0",
"GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1",
"Mozilla Public License 2.0", "The Unlicense"];

let licenseBadgesArray = ["", "License-Apache_2.0-blue", "License-GPLv3-blue", "License-MIT-yellow", "License-BSD_2--Clause-orange",
"License-BSD_3--Clause-blue", "License-Boost_1.0-lightblue", "License-CC0_1.0-lightgrey", "License-EPL_1.0-red",
"License-AGPL_v3-blue", "License-GPL_v2-blue", "License-LGPL_v2-blue",
"License-MPL_2.0-brightgreen", "license-Unlicense-blue"];

function renderLicenseBadge(license) {
  let licenseBadge = (licenseBadgesArray[licenseChoicesArray.indexOf(license)]);
  console.log(licenseBadge)
  if (licenseBadge !== "") {
    return `![Github license](https://img.shields.io/badge/${licenseBadge}.svg)`
  } else
    return ""
}

// function renderLicenseBadge(license) {
//   console.log(license)
//   if (license !== "none") {
//     return `https://img.shields.io/badge/License-${license}-green.svg`
// }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none" && license === "MIT" || license === "Apache_2.0") {
    return `https://opensource.org/licenses/${license}`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // console.log(`data generateMarkdown`)
    // console.log(data)
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
- ${data.description}

## Table of Contents
- [Installation] (#installation)
- [Usage] (#usage)
- [License] (#license)
- [Contribution] (#contribution)
- [Tests] (#tests)
- [Questions] (#questions)

<a name ="installation"></a>
## Installation
- ${data.installation}

<a name ="usage"></a>
## Usage 
- ${data.usage}

<a name ="license"></a>
## License
- This application is covered under the ${data.license} license.

<a name ="contribution"></a>
## Contribution
- ${data.contribution}

<a name ="tests"></a>
## Tests
- ${data.test}

<a name ="questions"></a>
## Questions
- GitHub: https://github.com/${data.username} <br>
If you have any questions you can contact me via ${data.email}

`;
}

module.exports = generateMarkdown

// module.exports = {
//     generateMarkdown: generateMarkdown,
//     generateLicenseBadge: renderLicenseBadge,
// };