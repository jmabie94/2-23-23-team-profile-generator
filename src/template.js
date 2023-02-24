const generateTeam = team => {
    
    const generateManager = manager => {
        return `
<div class="col">
    <div class="card h-100">
    <img src="../media/manager-1.png" class="card-img-top" alt="Manager Icon">
      <div class="card-body">
        <h3 class="card-title">${manager.getName()}</h3>
        <h5 class="card-title">${manager.getRole()}, Office Number: ${manager.getOffice()}</h5>
        <p class="card-text">An interesting fact about this employee is that ${manager.getFact()}, and their email address is: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Employee ID: ${manager.getID()}</small>
      </div>
    </div>
</div>`;
    };

    const generateEngineer = engineer => {
        return `
<div class="col">
    <div class="card h-100">
    <img src="../media/my-3-512.png" class="card-img-top" alt="Engineer Icon">
      <div class="card-body">
        <h3 class="card-title">${engineer.getName()}</h3>
        <h5 class="card-title">${engineer.getRole()}, Employee ID: ${engineer.getID()}</h5>
        <p class="card-text">An interesting fact about this employee is that ${engineer.getFact()}, and their email address is: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">GitHub Account: <a href="https://www.${engineer.getGithub()}">${engineer.getGithub()}</a></small>
      </div>
    </div>
</div>`;
    };

    const generateIntern = intern => {
        return `
<div class="col">
    <div class="card h-100">
    <img src="../media/qq-2-512.png" class="card-img-top" alt="Intern Icon">
      <div class="card-body">
        <h3 class="card-title">${intern.getName()}</h3>
        <h5 class="card-title">${intern.getRole()}, from ${intern.getSchool()}.</h5>
        <p class="card-text">An interesting fact about this employee is that ${intern.getFact()}, and their email address is: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Temporary Employee ID: ${intern.getID()}</small>
      </div>
    </div>
</div>`;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join("")
        );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
        );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
        );

    return html.join("");
}

module.exports = team => {
    return `
<!doctype html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>

  <body>
    <nav class="navbar bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 text-center">My Team</span>
        </div>
    </nav>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        ${generateTeam(team)}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>

</html>
`;
};