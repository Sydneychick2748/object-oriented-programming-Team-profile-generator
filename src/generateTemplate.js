
const generateTemplate = function(){
   
        `<html lang="en">
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Weather Dashboard</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
        </head>
        <body>
        <!-- Header containing application title -->
        <header class="custom-header text-light p-3">
            <div class="text-center">
                <h3>My Team</h3>
            </div>
        </header>
        <!-- Team Cards -->
        <div class="forecast-cards d-flex flex-row">
             ${generateManagerCard()}
            ${generateEngineerCard()}
            ${generateInternCard()}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        </body>
        </html>`;
    }
     
const generateManagerCard = function (manager) {
     return `<div class="card employee-card">
     <div class="card-header">
       <h2 class="card-title">{{ name }}</h2>
       <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}</h3>
     </div>
     <div class="card-body">
       <ul class="list-group">
         <li class="list-group-item">ID: {{ id }}</li>
         <li class="list-group-item">
           Email: <a href="mailto:{{ email }}">{{ email }}</a>
         </li>
         <li class="list-group-item">Office number: {{ officeNumber }}</li>
       </ul>
     </div>
   </div>
   Footer
   `
 }
 const generateEngineerCard = function (engineer) {
     return `
     <div class="card employee-card">
  <div class="card-header">
    <h2 class="card-title">{{ name }}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: {{ id }}</li>
      <li class="list-group-item">
        Email: <a href="mailto:{{ email }}">{{ email }}</a>
      </li>
      <li class="list-group-item">
        GitHub:
        <a
          href="https://github.com/{{ github }}"
          target="_blank"
         
          >{{ github }}</a
        >
      </li>
    </ul>
  </div>
</div>

`
}
 const generateInternCard = function (intern) {
    return `<div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">{{ name }}</h2>
      <h3 class="card-title">
        <i class="fas fa-user-graduate mr-2"></i>{{ role }}
      </h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: {{ id }}</li>
        <li class="list-group-item">
          Email: <a href="mailto:{{ email }}">{{ email }}</a>
        </li>
        <li class="list-group-item">School: {{ school }}</li>
      </ul>
    </div>
  </div>`
}





module.exports = generateTemplate;