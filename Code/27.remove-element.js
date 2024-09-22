const removeElement = (nums, val) => {
	let i = 0;
	for (const element of nums) {
		if (element !== val) {
			nums[i++] = element;
		}
	}
	console.log(nums);
	return i;
};
