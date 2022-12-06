// Import classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Import HTML templates
const generateTemplate = require("./src/generateTemplate");
const generateManagerCard = require("./src/generateTemplate");
const generateEngineerCard = require("./src/generateTemplate");
const generateInternCard = require("./src/generateTemplate");

// bring in the requirer
const fs = require("fs");
const inquirer = require("inquirer");

// employee =[{manage }, {intern }, {engineer}] push the class into here
const employeeArray = [];

// Add manager
const addManager = [
  {
    name: "role",
    type: "confirm",
    message: "This is your team generator!!! Are you ready to make a Great Working Team?",
  },
  {
    name: "name",
    type: "input",
    message: "Please enter the name of the manager:",
  },
  {
    name: "id",
    type: "input",
    message: "What is your employee ID?",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter your email address:",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "What is your office number?",
  },
  {
    name: "addMore",
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
  },
];

// Add new engineer
const addEngineer = [
  {
    name: "name",
    type: "input",
    message: "Please enter the name of the engineer:",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the ID of the engineer:",
  },
  {
    name: "email",
    type: "input",
    message: "What is the engineer's email address?",
  },
  {
    name: "github",
    type: "input",
    message: "Please enter the engineer's Github username:",
  },
  {
    name: "addMore",
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
  },
];

// Add intern
const addIntern = [
  {
    name: "name",
    type: "input",
    message: "What is the intern's name?",
  },
  {
    name: "id",
    type: "input",
    message: "What is the intern's employee ID?",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the intern's email address:",
  },
  {
    name: "school",
    type: "input",
    message: "What college or university does the intern attend?",
  },
  {
    name: "addMore",
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
  },
];

// Initialize application
ask(addManager);

//  questions if member needs to be added
function ask(questionArr) {
  inquirer
    .prompt(questionArr)
    .then((member) => {
      employeeArray.push(member);

      if (member.addMore === " Add Engineer") {
        ask(addEngineer);
      } else if (member.addMore === " Add Intern") {
        ask(addIntern);
      } else {
        createProfiles(employeeArray);
      }
    })
    .catch((err) => console.log(err));
}

// create the team in the array
function createProfiles(employeeArray) {
  const profiles = employeeArray.map((member) => {
    const { name, id, email } = member;

    // If you're adding a manager, ask for office number
    if (member.hasOwnProperty("officeNumber")) {
      const { officeNumber } = member;
      return new Manager(name, id, email, officeNumber);
    }

    // if you're adding an engineer, as for github
    if (member.hasOwnProperty("github")) {
      const { github } = member;
      return new Engineer(name, id, email, github);
    }

    // if you're adding an intern, ask for school
    if (member.hasOwnProperty("school")) {
      const { school } = member;
      return new Intern(name, id, email, school);
    }
  });

  // Generate HTML from the profiles made
  generateHtml(profiles);
}

//   generating the profiles into the cards html
function generateHtml(profiles) {
  let profileCards = "";
  profiles.forEach((profile) => {
    if (profile instanceof Manager) {
      const card = generateManagerCard(profile);
      profileCards += card;
    } else if (profile instanceof Engineer) {
      const card = generateEngineerCard(profile);
      profileCards += card;
    } else if (profile instanceof Intern) {
      const card = generateInternCard(profile);
      profileCards += card;
    }
  });

  const newHtml = generateTemplate(profileCards);

  writeHtml(newHtml);
}

// Function to write the final HTML document in dist folder
function writeHtml(newHtml) {
  fs.writeFile("./dist/team-profile.html", newHtml, (err) => {
    if (err) throw err;
    console.log("HTML document successfully created in the /dist folder.");
  });
}
