// 접근자 프로퍼티(Accessor Property)
class Student {
	constructor(lastName, firstName) {
		this.lastName = lastName;
		this.firstName = firstName;
	}
	get fullName() {
		return `${this.lastName} ${this.firstName}`;
	}
}

const student = new Student('Kim', 'Suzy');
student.lastName = 'Moon';
console.log(student.lastName);
console.log(student.fullName);
