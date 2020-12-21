const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const managerQuestions = [
    {
        type:'input',
        name:'officeNumber',
        message:"What is the Manager's office number?"
    },
    
]

const commonQuestions = [
    {
        type:'input',
        name:'name',
        message: "What is the employee's name?",
    },
    {
        type:'input',
        name:'id',
        message: "What is the employee's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
        validate: function (email) {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            }
            return "Please enter a valid email address.";
            
        }
    }
]

const engineerQuestions = [
    {
        type:'input',
        name:'github',
        message:"What is the Engineer's GitHub username?",
    }
]

const internQuestions = [
    {
        type:'input',
        name:'school',
        message:'Where did the Intern attend school?'
    }
]

const addMore = [
    {
        type:'list',
        name:'addMore',
        message: 'Would you like to add addtional team members?',
        choices: ['Engineer', 'Intern', 'No']
    },
]


function init() {
    inquirer
        .prompt(commonQuestions.concat(managerQuestions, addMore))
        .then(answers => {
            //set up manager obj
            let newPerson = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamArray.push(newPerson);
            console.log(JSON.stringify(answers))
            //recursive
            if (answers.addMore !== "No") {
                addTeamMember(answers.addMore)
            }
        })
        .catch(error => {
            console.log(error)
        })
}

function addTeamMember(role) {
    if (role === "Engineer") {
        var questions = commonQuestions.concat(engineerQuestions, addMore)
        inquirer
            .prompt(questions)
            .then(answers => {
                //team member obj
                let newPerson = new Engineer(answers.name, answers.id, answers.email, answers.github);
                console.log(JSON.stringify(answers))
                //add to team
                teamArray.push(newPerson);
                //recursive
                if (answers.addMore !== "No") {
                    addTeamMember(answers.addMore);
                }

            })
            .catch(error => {
                console.log(error);
            })
    } else if (role === "Intern") {
        var questions = commonQuestions.concat(internQuestions, addMore)
     
        inquirer
            .prompt(questions)
            .then(answers => {
                //team member obj
                let newPerson = new Intern(answers.name, answers.id, answers.email, answers.school);
                console.log(JSON.stringify(answers))
                //add to team
                teamArray.push(newPerson);
                //recursive
                if (answers.addMore !== "No") {
                    addTeamMember(answers.addMore);
                }

            })
            .catch(error => {
                console.log(error);
            })
        }
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```



//function call to initialize program
const teamArray = [];
init();
let html = render(teamArray);
fs.writeFile(outputPath, html, function (error) {
    if (error) throw error;
    console.log("file created");
})