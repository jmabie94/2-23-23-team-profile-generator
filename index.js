const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const generateTeam = require('./src/template.js');

teamArray = [];

function init() {
    function createTeam() {
        inquirer.prompt([{
            type: "list",
            message: "What kind of employee are you adding?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "No Employees Remaining"]
        }]).then(function (userInput) {
            switch(userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                
                default:
                    htmlGen();
            }
        });
    };
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the manager's ID number?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "managerFact",
                message: "What is an interesting fact about the manager?"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is the manager's office number?",
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerFact, answers.managerOffice);
            teamArray.push(manager);
            createTeam();
        });
    };
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is the engineer's ID number?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?",
            },
            {
                type: "input",
                name: "engineerFact",
                message: "What is an interesting fact about the engineer?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the link to the engineer's GitHub account?",
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerFact, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam();
        });
    };
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
            },
            {
                type: "input",
                name: "internID",
                message: "What is the intern's ID number?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email?",
            },
            {
                type: "input",
                name: "internFact",
                message: "What is an interesting fact about the intern?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?",
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internFact, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });
    };
    function htmlGen() {
        console.log("Team Created!")
        fs.writeFileSync(distPath, generateTeam(teamArray), "utf-8")
    };
    
    createTeam()
};

init();