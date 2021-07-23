const mysql = require('mysql');
const inquirer = require('inquirer');

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
            'View departments',
            'View roles',
            'View employees',
            'Add departments',
            'Add roles',
            'Add employees',
            'exit',
        ],
    })
    .then((answer) => {
        switch (answer.action) {
            case 'View departments':
                selectDepartment();
                break;

            case 'View roles':
                selectRole();
                break;

            case 'View employees':
                selectEmployee();
                break;

            case 'Add departments':
                addEmployee();
                break;
            
            case 'Add roles':
                addRole();
                break;

            case 'Add employees':
                addEmployee();
                break;

            case 'exit':
                connection.end();
                break;
                
            default:
                console.log(err);
                break;        
        }
    });
};

const selectDepartment = () => {
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
           const query = 'SELECT name FROM department WHERE ?';
           connection.query(query, {name: answer.name }, (err, res) => {
               if (err) throw err;
               res.forEach(({name}) => {
                   console.table(name);
               });
               startAction();
           })
       })
}