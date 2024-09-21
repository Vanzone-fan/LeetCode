const twoSum = function (nums, target) {
	const result = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (!result.has(target - nums[i])) {
			result.set(nums[i], i);
		} else {
			return [i, result.get(target - nums[i])];
		}
	}
};
