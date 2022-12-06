// Import classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Import HTML templates
const {
  generateTemplate,
  generateManagerCard,
  generateEngineerCard,
  generateInternCard,
} = require("./src/generateTemplate");

// bring in the requirer
const fs = require("fs");
const inquirer = require("inquirer");

// employee =[{manage }, {intern }, {engineer}] push the class into here
const employeeArray = [];

// Add manager
const addManager = [
  {
    name: "name",
    type: "input",
    message: "Please enter the name of the manager:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid name?");
        return false;
      }
    },
  },
  {
    name: "id",
    type: "input",
    message: "What is your employee ID?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid ID?");
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "Please enter your email address:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid intern email address?");
        return false;
      }
    },
  },
  {
    name: "officeNumber",
    type: "input",
    message: "What is your office number?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid number?");
        return false;
      }
    },
  },
  {
    name: "addMore",
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
  },
];

// Add  engineer
const addEngineer = [
  {
    name: "name",
    type: "input",
    message: "Please enter the name of the engineer:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid name?");
        return false;
      }
    },
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the ID of the engineer:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid ID?");
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "What is the engineer's email address?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid  email address?");
        return false;
      }
    },
  },
  {
    name: "github",
    type: "input",
    message: "Please enter the engineer's Github username:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid Github ?");
        return false;
      }
    },
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
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid  name?");
        return false;
      }
    },
  },
  {
    name: "id",
    type: "input",
    message: "What is the intern's employee ID?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid  ID?");
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the intern's email address:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid email address?");
        return false;
      }
    },
  },
  {
    name: "school",
    type: "input",
    message: "What college or university does the intern attend?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid school?");
        return false;
      }
    },
  },
  {
    name: "addMore",
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
  },
];

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
  console.table(profiles[0]);
  // Generate HTML from the profiles made
  generateHtml(profiles);
}

// Initialize application
ask(addManager);

//  questions  for if member needs to be added
function ask(questionArr) {
  inquirer
    .prompt(questionArr)
    .then((member) => {
      console.log(member);

      employeeArray.push(member);

      if (member.addMore === "Add Engineer") {
        ask(addEngineer);
      } else if (member.addMore === "Add Intern") {
        ask(addIntern);
      } else {
        createProfiles(employeeArray);
      }
    })
    .catch((err) => console.log(err));
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
  fs.writeFile("./dist/myTeamGenerated.html", newHtml, (err) => {
    if (err) throw err;
    console.log("HTML document successfully created in the /dist folder.");
  });
}
