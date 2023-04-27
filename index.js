const { Employees } = require("./classes/Employees")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Test your code here

const employee1 = new SoftwareEngineer("John", "Lead Software Engineer", 200000, ["C++", "Python", "Ruby"]);
const employee2 = new SoftwareEngineer("Emily", "Senior Software Engineer", 150000, ["Java", "JavaScript", "C#"]);
const employee3 = new SoftwareEngineer("Mike", "Software Engineer", 160000, ["Python", "JavaScript", "SQL"]);

console.log(Employees.getTotalPayroll())


module.exports = {
    Employees,
    Manager,
    SalesPerson,
    SoftwareEngineer
}