-- language: sql

INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Human Resources');

INSERT INTO role (id, title, salary, department_id) 
VALUES
  (1, 'Sales Associate', 50000, 1),
  (2, 'Software Engineer', 80000, 2),
  (3, 'HR Specialist', 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
  ('John', 'Doe', 1, 0),
  ('Jane', 'Smith', 2, 1),
  ('Mike', 'Johnson', 3, 1);
