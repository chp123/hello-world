var Person = require('person');

module.exports = function Student(name,age,klass){
	Person.call(this,name,age);
	this.klass=klass;
}

Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;

Student.prototype.introduce=function(){
	console.log("My name is "+ this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.klass+".");
}

