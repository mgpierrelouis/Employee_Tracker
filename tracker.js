const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Gwochef_1!',
  database: 'employee_trackerDB',
});

connection.connect((err) => {
    if (err) throw err;
    startAction();
});

const startAction = () => {
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'Choose action:',
        choices: [
            'View All Employees',
            'View Departments',
            'View Employees by Department',
            'View Roles',
            'View Employees by Role',
            'Add Departments',
            'Add Roles',
            'Add Employees',
            'EXIT',
        ],
    })
    .then((answer) => {
        switch (answer.action) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            
            case 'View Departments':
                viewDepartments();
                break;

            case 'View Employees by Department':
                selectByDepartment();
                break;

            case 'View Roles':
                viewRole();
                break;

            case 'View Employees by Role':
                selectByRole();
                break;

            case 'Add Departments':
                addDepartment();
                break;
            
            case 'Add Roles':
                addRole();
                break;

            case 'Add Employees':
                addEmployee();
                break;

            case 'EXIT':
                connection.end();
                break;
                
            default:
                console.log(err);
                break;        
        }
    });
};

const viewAllEmployees = () => {
     cTable
     const query = 'SELECT * FROM employee';
        connection.query(query, (err, res) => {
              console.table(res);
              console.log(err);
               startAction();
           })
    
};

const viewDepartments = () => {
    cTable
    const query = 'SELECT * FROM department';
        connection.query(query, (err,res) => {
            console.table(res)
            console.log(err);
            startAction();
        })
};

const selectByDepartment = () => {
    inquirer
        .prompt({
            name: 'department',
            type: 'list',
            message: 'Which departmant would you like to view?',
            choices: [
                'Engineering',
                'Human Resources',
                'Customer Service',
                'Sales',
                'Administration'
            ]
        })
       .then((answer) => {
           cTable
           switch (answer.department) {
               case 'Engineering':
                const queryEng = 'SELECT * FROM employee WHERE role_id BETWEEN 3 AND 4';
                connection.query(queryEng, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;
                
                case 'Human Resources':
                 const queryHRdep = 'SELECT * FROM employee WHERE role_id BETWEEN 7 AND 8';
                 connection.query(queryHRdep, (err, res) => {
                        console.table(res);
                        console.log(err);
                   });
                   break;

                case 'Customer Service':
                 const queryCS = 'SELECT * FROM employee WHERE role_id BETWEEN 5 AND 6';
                 connection.query(queryCS, (err, res) => {
                        console.table(res);
                        console.log(err);
                    });
                    break;

                case 'Sales':
                 const querySales = 'SELECT * FROM employee WHERE role_id BETWEEN 1 AND 2';
                 connection.query(querySales, (err, res) => {
                        console.table(res);
                        console.log(err);
                    });
                    break;

                case 'Administration':
                 const queryAdmin = 'SELECT * FROM employee WHERE role_id BETWEEN 9 AND 10';
                 connection.query(queryAdmin, (err, res) => {
                        console.table(res);
                        console.log(err);
                    });
                    break;

                    

           }
           startAction();

       })
};

const viewRole = () => {
    cTable
    const query = 'SELECT * FROM role';
        connection.query(query, (err,res) => {
            console.table(res)
            console.log(err);
            startAction();
        })
};

const selectByRole = () => {
    inquirer
        .prompt({
            name: 'role',
            type: 'list',
            message: 'Which role would you like to view?',
            choices: [
                'Sales Manager',
                'Sales Associate',
                'Chief Engineer',
                'Associate Engineer',
                'Customer Service Manager',
                'Customer Service Rep',
                'Human Resources Manager',
                'Human Resources',
                'Chief Administrator',
                'Administrating Officer'
            ]
        })
       .then((answer) => {
           cTable
           switch (answer.role) {
            case 'Sales Manager':
                const querySM = 'SELECT * FROM employee WHERE role_id = 1';
                connection.query(querySM, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;

            case 'Sales Associate':
                const querySA = 'SELECT * FROM employee WHERE role_id = 2';
                connection.query(querySA, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;

            case 'Chief Engineer':
                const queryCE = 'SELECT * FROM employee WHERE role_id = 3';
                connection.query(queryCE, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;

            case 'Associate Engineer':
                const queryAE = 'SELECT * FROM employee WHERE role_id = 4';
                connection.query(queryAE, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;

            case 'Customer Service Manager':
                const queryCM = 'SELECT * FROM employee WHERE role_id = 5';
                connection.query(queryCM, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;

            case 'Customer Service Rep':
                const queryCS = 'SELECT * FROM employee WHERE role_id = 6';
                connection.query(queryCS, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;

            case 'Human Resources Manager':
                const queryHM = 'SELECT * FROM employee WHERE role_id = 7';
                connection.query(queryHM, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;

            case 'Human Resources':
                const queryHR = 'SELECT * FROM employee WHERE role_id = 1';
                connection.query(queryHR, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;
                
            case 'Chief Administrator':
                const queryCA = 'SELECT * FROM employee WHERE role_id = 9';
                connection.query(queryCA, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;
            
            case 'Adminstrating Officer':
                const queryAO = 'SELECT * FROM employee WHERE role_id = 10';
                connection.query(queryAO, (err, res) => {
                      console.table(res);
                      console.log(err);
                   });
                   break;

           };
           startAction();

       })
};

