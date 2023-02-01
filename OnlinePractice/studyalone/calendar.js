const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const currentDate = new Date();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

const monthYear = document.getElementById('month-year');
monthYear.innerHTML = monthNames[month] + ' ' + year;

const calendarBody = document.getElementById('calendar-body');

const date = new Date(year, month, 1);
const startingDay = date.getDay();

let daysInMonth = 32 - new Date(year, month, 32).getDate();

let calendar = '<tr>';
for (let i = 0; i < startingDay; i++) {
	calendar += '<td></td>';
}

for (let i = 1; i <= daysInMonth; i++) {
	if (
		i == currentDate.getDate() &&
		month == currentDate.getMonth() &&
		year == currentDate.getFullYear()
	) {
		calendar += '<td><strong>' + i + '</strong></td>';
	} else {
		calendar += '<td>' + i + '</td>';
	}
	if ((startingDay + i) % 7 == 0) {
		calendar += '</tr><tr>';
	}
}

calendar += '</tr>';
calendarBody.innerHTML = calendar;
