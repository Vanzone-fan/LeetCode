const reference = new Map();
reference.set('I', 1);
reference.set('V', 5);
reference.set('X', 10);
reference.set('L', 50);
reference.set('C', 100);
reference.set('D', 500);
reference.set('M', 1000);

const romanToInt = s => {
	let res = 0;
	for (let i = 0; i < s.length; i++) {
		let current = reference.get(s[i]);
		let next = s[i + 1] ? reference.get(s[i + 1]) : 0;
		res += current < next ? -current : current;
	}
	return res;
};
romanToInt('IV');
