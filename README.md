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

- **Node.js**: Ensure you have Node.js installed on your system. More details at [Node.js website](https://nodejs.org/).

```
bash
npm install node
```

- **MySQL**: Install MySQL server and MySQL command-line client on your system. More details at [MySQL website](https://dev.mysql.com/downloads/).

```
bash
# Installation steps for MySQL may vary depending on your operating system. Please refer to the official documentation for detailed instructions.
```

- **MySQL2**: This is a Node.js driver for MySQL. You can install it using npm, the Node.js package manager, by running the following command in your terminal:

```
bash
npm install mysql2
```

- **Inquirer**: This package will be used to interact with the user via the command line. You can install it using npm by running the following command:

```
bash
npm install inquirer@8.2.4
```

- Once you have Node.js, MySQL, MySQL2, and Inquirer installed on your system, you should be all set to run the Node Employee Tracker project.

## Usage

- To start the application, run the following command:

`node index.js`

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

Contributions are welcome. If you find any issues or have suggestions for improvements, please submit a pull request.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
