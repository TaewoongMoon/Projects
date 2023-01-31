// 접근자 프로퍼티 (Accessor Property)

class Student {
  firstName;
  lastName;
  fullName;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.lastName}${this.firstName}`;
  }
  get fullNameDisplay() {
    return `${this.lastName}${this.firstName}`;
  }
  set fullNameDisplay(value) {
    console.log(value);
  }
}

const student = new Student('태웅', '문');
console.log(student);
student.lastName = '김';
console.log('lastName', student.lastName);
student.fullName = '김새로이';
console.log(student.fullName);
