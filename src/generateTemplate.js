const Intern = require("../lib/Intern");

//  this will generate the cards
const generateTemplate = (cards) => {
  return ` <!DOCTYPE html>
  <html lang="en">
  
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>MY TEAM</title>
    
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="./styles.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  
  <body>
  
      <!-- navbar -->
      <div class="container-fluid ">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                  <h1 class="text-center text-white">My Team</h1>
              </div>
          </div>
      </div>
  
  
  
  
      
      <!-- cards -->
      <div class="container">
          <div class="row">
              <div class="row team-area col-12 d-flex justify-content-center">
  
            
                  
  
  ${cards}
  
  
            
          
              </div>
          </div>
      </div>
  </body>
  </html> `;
};

// this will generate the manager
const generateManagerCard = (profile) => {
  console.log(profile.getName());

  return `<div class="card employee-card">
     <div class="card-header">
      
       <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${profile.getRole()}</h3>
       <h2 class="card-title">${profile.getName()}</h2>
     </div>
     <div class="card-body">
       <ul class="list-group">
         <li class="list-group-item">ID: ${profile.getRole()}</li>
         <li class="list-group-item">
           Email: <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a>
         </li>
         <li class="list-group-item">Office number: ${profile.getOfficeNumber()}</li>
       </ul>
     </div>
   </div>
  
   `;
};

// this will generate the engineer
const generateEngineerCard = (profile) => {
  return ` <div class="card employee-card">
  <div class="card-header">
  
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${profile.getRole()}</h3>
    <h2 class="card-title">${profile.getName()}</h2>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${profile.getId()}</li>
      <li class="list-group-item">
      Email: <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a>
      </li>
      <li class="list-group-item">
        GitHub:
        <a
          href="https://github.com/${profile.getGithub()}"
          target="_blank"
         
          >${profile.getGithub()}</a
        >
      </li>
    </ul>
  </div>
</div>

`;
};
// this will generate the Intern
const generateInternCard = (profile) => {
  return `<div class="card employee-card">
    <div class="card-header">
    
      <h3 class="card-title">
        <i class="fas fa-user-graduate mr-2">${profile.getRole()}</i>
      </h3>
      <h2 class="card-title">${profile.getName()}</h2>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${profile.getId()}</li>
        <li class="list-group-item">
          Email: <a href="mailto: ${profile.getEmail()}">${profile.getEmail()}</a>
        </li>
        <li class="list-group-item">School: ${profile.getSchool()}</li>
      </ul>
    </div>
  </div>`;
};
//  exports the functions
module.exports = {
  generateTemplate,
  generateInternCard,
  generateEngineerCard,
  generateManagerCard,
};
