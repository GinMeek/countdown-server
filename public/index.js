let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let date = document.getElementById('date');
let time = document.getElementById('time');

let endDate = `${date.value} ${time.value}`;

startCountdown();

function startCountdown() {
	setInterval(function() {
		let now = new Date().getTime();
		let countdown = new Date(endDate).getTime();
		let distance = countdown - now;

		// Calculations for days, hours, minutes and seconds
		let d = Math.floor(distance / (1000 * 60 * 60 * 24));
		let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let s = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in elements
		days.innerHTML = d + "<br><span>Days</span>";
		hours.innerHTML = h + "<br><span>Hours</span>";
		minutes.innerHTML = m + "<br><span>Minutes</span>";
		seconds.innerHTML = s + "<br><span>Seconds</span>";

		// Stroke animation
		dd.style.strokeDashoffset = 440 - ((440 * d) / 365); // 365 day in a year
		hh.style.strokeDashoffset = 440 - ((440 * h) / 24); // 24 hours in a day
		mm.style.strokeDashoffset = 440 - ((440 * m) / 60); // 60 minutes in an hour
		ss.style.strokeDashoffset = 440 - ((440 * s) / 60); // 60 seconds in a minute

		// Dot animation
		day_dot.style.transform = `rotateZ(${d * 0.9863}deg)`; // 360 / 365 = 0.9863
		hr_dot.style.transform = `rotateZ(${h * 15}deg)`; // 360 / 24 = 15
		min_dot.style.transform = `rotateZ(${m * 6}deg)`; // 360 / 60 = 6
		sec_dot.style.transform = `rotateZ(${s * 6}deg)`; // 360 / 60 = 6
	});
}