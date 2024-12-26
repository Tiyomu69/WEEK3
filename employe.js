function EmployeeInfo(name, Salary) {
    console.log("Welcome" + name + "Your monthly salary is " + Salary)

}
console.log("This 'is my first progame")

var EmpName = "John"
var EmpSalary = 50000
    //callin of the function employeeinfo
EmployeeInfo(EmpName, EmpSalary)
    //code for second exercise
const empskill = (skill) => {
    console.log("Expert in " + skill)
}
empskill("java")
onst student = require('./StudentInfo')
const person = require('./Person')
    // because getName is the function so we use ()
console.log("Student Name:" + student.getName())
console.log(student.Location())
console.log(student.dob)
    // because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is " + student.Studentgrade(55))
person1 = new person("Jim", "USA", "myemail@gmail.com")
console.log("using Person Module", person1.getPersonInfo())
console.log("Programe ended")