const majorityElement = nums => {
	let [candidate, count] = [0, 0];
	for (const num of nums) {
		if (count === 0) {
			candidate = num;
			count++;
		} else if (candidate === num) {
			count++;
		} else {
			count--;
		}
	}
	return candidate;
};
