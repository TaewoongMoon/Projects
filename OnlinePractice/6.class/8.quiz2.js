class employee {
  constructor(name, departmentName, workingHour, payRate) {
    this.name = name;
    this.departmentName = departmentName;
    this.workingHour = workingHour;
    this.payRate = payRate;
  }
}

class rEmployee extends employee {
  static PAY_RATE = 10000;
  constructor(name, departmentName, workingHour) {
    super(name, departmentName, workingHour, rEmployee.PAY_RATE);
  }
}
