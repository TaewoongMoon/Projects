function Person(name, gender) {
	this.name = name;
	this.gender = gender;
	console.log('this', this);
}

function Student(name, gender, school) {
	this.school = school;
	Person.call(this, name, gender);
}

var by = new Student('보영', 'female', '단국대');
