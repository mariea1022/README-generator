# Challenge 9 - Node.js: Professional README Generator

## Description
To create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.

For this project, I used further advanced my knowledge of Node.js.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation

Installed npm and Inquirer 8.2.4.

## Usage

[Here is a walkthrough video that demonstrates the functionality of the README generator.](https://drive.google.com/file/d/1tRyobDygq2uknS9lsiCSpuJlp290g2ZT/view?usp=sharing)

The application will be invoked by using the following command:

```bash
node index.js
```

The user will then be presented a series of questions. The input from the user will be generated into a README.md file.

## Credits

N/A

## License

None