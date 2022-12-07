# object-oriented-programming-Team-profile-generator

## Description
 This webpage is designed  for a company who wants to build a software team with ease that is user friendly and the UI looks great also so the a manager of a team can have access to there teams basic info, emails and GitHub profiles quickly and easily

This website is built in  Node.js command-line application that takes in information and builds a team of employees.
 
 This website is build with the use of OOP, Iqnuirer, Constructors and Classes(Among these were the Employee, Manager, Engineer, and Intern ) , also using using Jest for testing .The objective was to build a easy company team profile generator in  Node.js command-line application that takes in information about employees on a software engineering team, and with that information generates an HTML webpage that displays the user input data.

 
 
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 

 Start wit hmaking a reop in the github and then coling in the terminal then making folder and opening in the vs code .  When you start in vs code you must first use npm -y init to make your package-lock.json and node_modules. Then install npm jest and npm inuirer . When the package json is made , enter into the scrips and added :
 "scripts": {
    "test": "jest test",
    },
  so when you want to run the test in the terminal you will use `npm run test` and when you want to start the making of the team you will use ` node index.js`. Then you will make a file system to run everything here is a list of folders and files :
 In the  vs code these are the files created : 
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist: index.html, styles.css and the output file that is created called myTeamGenerated.html     
├── lib:  Employee.js, Engineer.js, Intern.js, Manager.js            
├── src:  generatetemplate.js              
├── .gitignore           
├── index.js              
         

## Usage 

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
To see the video of how it run please visit here :
## License 
This project is unlicenced 

## Contributing 
Contributors should go to my github for this repo at:

## Tests
Run `npm run test` to run Jest for tests and `npm index.js` to start the questions to build the Team webpage. 

## Questions
If you have any questions about this projects, please contact me directly at anabennett77@gmail.com You can view more of my projects at:
