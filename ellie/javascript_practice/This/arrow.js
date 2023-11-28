const ageTest = {
	unit: '살',
	ageList: [10, 20, 30],
	getAgeList: function () {
		const result = this.ageList.map(function (age) {
			return age;
		});
		console.log(result);
	},
};

ageTest.getAgeList();
