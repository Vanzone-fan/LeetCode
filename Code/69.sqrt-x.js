const mySqrt = x => {
	let res = 0;
	for (let i = 1; i * i <= x; i++) res = i;
	return res;
};
