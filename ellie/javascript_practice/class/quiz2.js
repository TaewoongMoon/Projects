class employee {
	constructor(name, dpName, workHours) {
		this.name = name;
		this.dpName = dpName;
		this.workHours = workHours;
	}
}

class partTime extends employee {
	constructor(name, dpName, workHours) {
		super(name, dpName, workHours);
	}

	get salary() {
		return this.workHours * 8000 * 30;
	}
}

class fullTime extends employee {
	constructor(name, dpName, workHours) {
		super(name, dpName, workHours);
	}

	get salary() {
		return this.workHours * 10000 * 30;
	}
}

const partMoon = new partTime('Taewoong Moon', 'marketing', 8);
console.log(partMoon.salary);
