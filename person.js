function Person(firstName, lastName,  age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.getFullName = function () {
		return this.firstName +" "+ this.lastName;
	}
	this.getInfo = function () {
		return "My name is "+this.getFullName();
	}
}
function Student(firstName, lastName, age, department, number) {
	this.students = [];
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.department = department;
	var matricNumber = number;
	this.getMatricNumber = function () {
		return matricNumber;
	};
	//Inheriting method and overriding getInfo() from the Person class
	Student.prototype.getInfo = function () {
		return "My name is "+this.getFullName()+" and am a student in the department of "+this.department;
	};

}
function Employee(firstName, lastName, age, job, salary) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.job = job;
	this.salary = salary;
}
//inheriting from the super class Person
Student.prototype = new Person();
Employee.prototype = new Person();

//Create instance of class Students
var student1 = new Student("Jorg", "Are", 18, "Computer Science");
var student2 = new Student("John", "Marley", 29, "Mathematics");
Console.log(student1.getInfo());

//Create instance of class Employee
var employee1 = new Employee("John", "Smith", 35,"Programmer", 56000);
var p1 = new Person("a", "b", 23);
Console.log(student1.getFullName());