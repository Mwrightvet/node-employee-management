// necessary packages
const inquirer = require("inquirer");
const mysql = require("mysql2");

// Create MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password", // TO DO: Hide  MySQL password
  database: "employee_db",
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the employee database.");
  // Call function to start application
  start();
});

// Function to start the application
function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View all departments":
          viewDepartments();
          break;

        case "View all roles":
          viewRoles();
          break;

        case "View all employees":
          viewEmployees();
          break;

        case "Add a department":
          addDepartment();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Update an employee role":
          updateEmployeeRole();
          break;

        case "Exit":
          connection.end();
          break;
      }
    });
}

// Function to view all departments
function viewDepartments() {
  // Query the database to retrieve all departments
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    // Restart the application
    start();
  });
}

// Function to view all roles
function viewRoles() {
  // Query the database to retrieve all roles
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    // Restart the application
    start();
  });
}

// Function to view all employees
function viewEmployees() {
  // Query the database to retrieve all employees
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    // Restart the application
    start();
  });
}

// Function to add a department
function addDepartment() {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "Enter the name of the department:",
    })
    .then((answer) => {
      // Insert the new department into the database
      connection.query(
        "INSERT INTO department SET ?",
        { name: answer.name },
        (err) => {
          if (err) throw err;
          console.log("Department added successfully!");
          // Restart the application
          start();
        }
      );
    });
}

// Function to add a role
function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "Enter the title of the role:",
      },
      {
        name: "salary",
        type: "input",
        message: "Enter the salary for this role:",
      },
      {
        name: "department_id",
        type: "input",
        message: "Enter the department ID for this role:",
      },
    ])
    .then((answers) => {
      // Insert the new role into the database
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answers.title,
          salary: answers.salary,
          department_id: answers.department_id,
        },
        (err) => {
          if (err) throw err;
          console.log("Role added successfully!");
          // Restart the application
          start();
        }
      );
    });
}

// Function to add an employee
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Enter the employee's first name:",
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter the employee's last name:",
      },
      {
        name: "role_id",
        type: "input",
        message: "Enter the role ID for this employee:",
      },
      {
        name: "manager_id",
        type: "input",
        message:
          "Enter the manager ID for this employee (leave empty if none):",
      },
    ])
    .then((answers) => {
      // Convert manager_id to null if empty
      const managerId = answers.manager_id === "" ? null : answers.manager_id;

      // Insert the new employee into the database
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answers.first_name,
          last_name: answers.last_name,
          role_id: answers.role_id,
          manager_id: managerId, // Use the converted managerId
        },
        (err) => {
          if (err) throw err;
          console.log("Employee added successfully!");
          // Restart the application
          start();
        }
      );
    });
}
