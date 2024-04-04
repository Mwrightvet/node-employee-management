# Node Employee Management
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
by Melissa Wright

Node Employee Tracker is a command-line application built with Node.js, Inquirer, and MySQL that allows business owners to manage their company's employee database efficiently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Walkthrough Video](#walkthrough-video)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Install dependencies:

```npm install```

2. Set up MySQL database:
- Ensure you have MySQL installed on your system.
- Run the provided schema.sql and seeds.sql files to set up the database schema and seed data.

3. Update MySQL connection settings:
- Open index.js and add your MySQL password.

## Usage
- To start the application, run the following command:

```node index.js```

- Follow the prompts to manage departments, roles, and employees in your company.

## Features
- View all departments, roles, and employees
- Add new departments, roles, and employees
- Update an employee's role

## Walkthrough Video
- Link to Walkthrough Video (TO DO: Add video link)
- Abve is the link to the walkthrough video demonstrating the functionality of the employee tracker. The video shows how to invoke the application from the command line.

## Database Schema
- The database schema includes three tables: department, role, and employee, following the structure outlined in the project requirements.

```
department
- id: INT PRIMARY KEY
- name: VARCHAR(30)

role
- id: INT PRIMARY KEY
- title: VARCHAR(30)
- salary: DECIMAL
- department_id: INT FOREIGN KEY (references department.id)

employee
- id: INT PRIMARY KEY
- first_name: VARCHAR(30)
- last_name: VARCHAR(30)
- role_id: INT FOREIGN KEY (references role.id)
- manager_id: INT FOREIGN KEY (references employee.id)
```

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request. 

License

   
