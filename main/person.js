module.exports =function Person(name,age){
	this.name=name;
	this.age=age;
	this.introduce=function(){
		console.log("My name is "+name+". I am "+age+" years old.");
	}
}