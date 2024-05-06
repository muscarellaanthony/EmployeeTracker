const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "City of Pawnee" }).render();

  console.log(logoText);

  loadMainPrompts();
}

function loadMainPrompts() {
  prompt([
    // TODO- Create first question user will see- "What would you like to do?"
    {
        type: 'choices',
        name: 'start',
        message: 'What would yo like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Quit']
    }
  ]).then((res) => {
    // TODO- Create a variable to store the user's choice
    const userChoice = res.start 
    // TODO- Create a switch statement to call the appropriate function depending on what the user chose
    switch (userChoice){
        case 'View all departments':
            viewDepartments()
            break;
        case 'View all roles':
            viewRoles()
            break;
        case 'View all employees':
            viewEmployees()
            break;
        case 'Add a department':
            addDepartment()
            break;
        case 'Add a role':
            addRole()
            break;
        case 'Add an employee':
            addEmployee();
            break;
        case 'Quit':
            quit()
            break;
    }
  });
}

// TODO- Create a function to View all employees
function viewEmployees() {

}

// BONUS- Create a function to View all employees that belong to a department

// BONUS- Create a function to View all employees that report to a specific manager

// BONUS- Create a function to Delete an employee

// TODO- Create a function to Update an employee's role

// BONUS- Create a function to Update an employee's manager

// TODO- Create a function to View all roles

// TODO- Create a function to Add a role

// BONUS- Create a function to Delete a role

// TODO- Create a function to View all deparments
function viewDepartments(){
    
}
// TODO- Create a function to Add a department

// BONUS- Create a function to Delete a department

// BONUS- Create a function to View all departments and show their total utilized department budget

// TODO- Create a function to Add an employee

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}