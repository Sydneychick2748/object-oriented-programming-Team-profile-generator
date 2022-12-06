// const { default: inquirer } = require("inquirer")
const generateTemplate = require("./src/generateTemplate");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// bring in the requirer
const fs = require("fs");
const inquirer = require("inquirer");

// employee =[{manage }, {intern }, {engineer}] push the class into here
const employeeArray = [];

// create a function tht runs required questions  .then don't let them end then run another prompt .then (() =>inquirer.prompt()then)

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is  the managers name of this team ?",
      },

      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID number ?",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is  the  manager's office number ?",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      employeeArray.push(manager);
      console.log(manager);
    });
};
const addEmployee = () => {
  return (
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Please choose your employee's role",
          choices: ["Engineer", "Intern", "im am done adding a team members "],
        },
        {
          type: "input",
          name: "name",
          message: "What's the name of the employee?",
        },
        {
          type: "input",
          name: "id",
          message: "Please enter the employee's ID.",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter the employee's email.",
        },
        {
          type: "input",
          name: "github",
          message: "Please enter the employee's github username.",
          when: (input) => input.role === "Engineer",
        },
        {
          type: "input",
          name: "school",
          message: "Please enter the intern's school",
          when: (input) => input.role === "Intern",
        },

        //  ====================================== do i need this to do the loop or just the above code ??
        {
          type: "input",
          name: "finished",
          message: "i am done adding members",
          when: (input) => input.role === "finished",
        },
      ])
      // if (answer.employee === 'I am done adding team members.') {
      //     console.log(employeeList);
      //     return employeeList;
      // }
      // })

      .then((employeeData) => {
        // data for employee types

        let { name, id, email, role, github, school } = employeeData;
        let employee;

        if (role === "Engineer") {
          employee = new Engineer(name, id, email, github);

          console.log(employee);
        } else if (role === "Intern") {
          employee = new Intern(name, id, email, school);

        //   console.log(employee);
        // } else if (role === "finished") {
        //   return employeeArray;
        // }
        // else if (role === "im am done adding a team members") {
        //     return employeeArray;
        }
        //     console.log(employee);
        // }
        console.log(employeeArray);
        // =============================================== why is my loop still running what am i missing ??
        employeeArray.push(employee);

        if (role) {
          return addEmployee(employeeArray);
        } else if (role === "im am done adding a team members ") {
            return generateTemplate(employeeArray);
    
        }
      })
  );
};

addManager()
  .then(addEmployee)
  .then((employeeArray) => {
    return generateTemplate(employeeArray);
  })
  .then(() => {
    return writeFile();
  })
  .catch((err) => {
    console.log(err);
  });

// fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log("Your team profile has been  created!")
// );

//     err ? console.log(err) : console.log('Successfully created index.html!')
// );

// then loop threw the array above and convert it to html with a template lit
// function to generate HTML page file using file system
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the profile has been created
    } else {
      console.log("Your team profile has been  created!");
    }
  });
};

// addManager()
//   .then(addEmployee)
//   .then(employeeArray => {

//     return  generateTemplate(employeeArray);

//   })
//   .then(indexHTML => {
//     return writeFile(indexHTML);
//   })
//   .catch(err => {
//  console.log(err);
//   });
