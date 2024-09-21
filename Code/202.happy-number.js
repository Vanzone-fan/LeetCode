const isHappy = n => {
	const set = new Set();
	while (n !== 1 && !set.has(n)) {
		set.add(n);
		const array = Array.from(n.toString());
		n = array.reduce((previousValue, currentValue) => previousValue + currentValue ** 2, 0);
	}
	return n === 1;
};
