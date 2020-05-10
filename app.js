const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const haveMore = true;

console.log("Hello welcome to Employee Summary!");




const questionsInitial = [
    {
        type: "input",
        name: "name",
        message: "What is your full name?"
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is your employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "list",
        name: "user",
        message: "What type of user are you?",
        choices: ['Manager', 'Engineer', 'Intern', 'I am done entering data']
    }
];

const questionOffice = [
    {
        type: "input",
        name: "office",
        message: "What is your office number?"
    }
];

const questionGithub = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub user name?"
    }
];

const questionSchool = [
    {
        type: "input",
        name: "school",
        message: "What school do you go to?"
    }
];

inquirer.prompt(questionsInitial).then(answers => {
    console.log(answers, null, '  ');
    
    if (answers.user === "Manager") {
        inquirer.prompt(questionOffice).then(answers => {
         console.log("Ok you are a manager.");
         return;   
        });  
    } else if (answers.user === "Engineer") {
        
        inquirer.prompt(questionGithub).then(answers => {
            console.log("Ok you are an Engineer.");
            return;  
        });
    } else if (answers.user === "Intern") {
        inquirer.prompt(questionSchool).then(answers => {
            console.log("Ok you are an intern.");
            return; 
        });
    } else {
        console.log("That is it.");
    }
});


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
// for the provided `render` function to work!