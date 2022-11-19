const fs = require('fs');

// CREATE
fs.writeFileSync('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
	if (err) console.log(err);
});

// READ
const data = fs.readFileSync('employees.json', 'utf8', (err, data) => {
	if (err) console.log(err);
	console.log(data);
});

// UPDATE
const employee = JSON.parse(data);
employee.name = 'Employee 1 Name Updated';
employee.salary = 5000;

fs.writeFile('employees.json', JSON.stringify(employee), 'utf8', (err) => {
	if (err) console.log(err);
});

// DELETE
fs.unlink('employees.json', (err) => {
	if (err) console.log(err);
});

