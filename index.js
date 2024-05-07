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
            type: 'list',
            name: 'start',
            message: 'What would yo like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee','Quit']
        }
    ]).then((res) => {
        // TODO- Create a variable to store the user's choice
        const userChoice = res.start
        // TODO- Create a switch statement to call the appropriate function depending on what the user chose
        switch (userChoice) {
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
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee':
                updateEmployee();
                break;
            case 'Quit':
                quit();
                break;
        }
    });
}

// TODO- Create a function to View all employees
function viewEmployees() {
    db.findAllEmployees()
        .then(({ rows }) => {
            console.table(rows)
        })
        .then(() =>{
            loadMainPrompts()
        })
    
}

// BONUS- Create a function to View all employees that belong to a department

// BONUS- Create a function to View all employees that report to a specific manager

// BONUS- Create a function to Delete an employee

// TODO- Create a function to Update an employee's role
const updateEmployee = async () => {
    let { rows } = await db.findAllEmployees()
    const employees = rows.map(({ employee_id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: employee_id
    }));
    let res = await db.findAllRoles()
    let list = res.rows
    const roles = list.map(({role_id, title}) => ({
        name: title,
        value: role_id
    }))
    let { employee_id, update_item } = await prompt([
        {
            type: 'list',
            name: `employee_id`,
            message: 'Which employee are you editing?',
            choices: employees
        },
        {
            type: 'list',
            name: 'update_item',
            message: 'What would you like to update?',
            choices: [
                {
                    name: 'First Name',
                    value: 'first_name'
                },
                {
                    name: 'Last Name',
                    value: 'last_name'
                },
                {
                    name: 'Role',
                    value: 'role_id'
                },
            ]
        },

    ])
    let update_info;
    switch (update_item) {
        case 'first_name':
            let { newFirstName } = await prompt([
                {
                    name: 'newFirstName',
                    message: 'What is the new first name?'
                }
            ])
            update_info = newFirstName;
            break;
        case 'last_name':
            let { newLastName } = await prompt([
                {
                    name: 'newLastName',
                    message: 'What is the new last name?'
                }
            ])
            update_info = newLastName;
            break;
        case 'role_id':
            let { newRole } = await prompt([
                {
                    type: 'list',
                    name: 'newRole',
                    message: 'What is the new role?',
                    choices: roles
                }
            ])
            update_info = newRole;
            break;
    }
    await db.updateEmployee(employee_id, update_item, update_info)
    console.log('Updated Employee.')
    loadMainPrompts()
}

// BONUS- Create a function to Update an employee's manager

// TODO- Create a function to View all roles
function viewRoles() {
    db.findAllRoles()
        .then(({ rows }) => {
            console.table(rows)
        })
        .then(() =>
            loadMainPrompts())
}
// TODO- Create a function to Add a role
const addRole = async () => {
    let { rows } = await db.findAllDepartments();
    const departments = rows.map(({ department_name, department_id }) => ({
        name: department_name,
        value: department_id
    }))
    let { newRole, newSalary, department } = await prompt([
        {
            type: 'input',
            name: 'newRole',
            message: 'What is the new role called?'
        },
        {
            type: 'input',
            name: 'newSalary',
            message: 'What is the salary for new role?'
        },
        {
            type: 'list',
            name: 'department',
            message: 'What department does the new role belong to?',
            choices: departments
        }
    ]);
    await db.inputRole(newRole, newSalary, department)
    console.log('Added role.')
    loadMainPrompts()
}
// BONUS- Create a function to Delete a role

// TODO- Create a function to View all deparments
function viewDepartments() {
    db.findAllDepartments()
        .then(({ rows }) => {
            console.table(rows)
        })
        .then(() =>
            loadMainPrompts())
}
// TODO- Create a function to Add a department
const addDepartment = async () => {
    let { newDepartment } = await prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: 'What would you like the department to be called?'
        }
    ])
    await db.inputDepartment(newDepartment);
    console.log('New department added.');
    loadMainPrompts();
}
// BONUS- Create a function to Delete a department

// BONUS- Create a function to View all departments and show their total utilized department budget

// TODO- Create a function to Add an employee
const addEmployee = async () => {
    let { rows } = await db.findAllRoles()
    const roles = rows.map(({role_id, title}) => ({
        name: title,
        value: role_id
    }))
    let {first_name, last_name, role_id} = await prompt([
        {
            type: 'input',
            name: 'first_name',
            message: `What is the employee's first name?`
        },
        {
            type: 'input',
            name: 'last_name',
            message: `What is the employee's last name?`
        },
        {
            type: 'list',
            name: 'role_id',
            message: `What is the employee's role?`,
            choices: roles
        },
    ])
    await db.inputEmployee(first_name, last_name, role_id)
    console.log('Employee added.')
    loadMainPrompts();
}

// Exit the application
function quit() {
    console.log("Goodbye!");
    process.exit();
}