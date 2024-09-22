const minSubArrayLen = function (target, nums) {
	let result = nums.length + 1;
	let sum = 0;
	let start = 0;
	for (let end = 0; end < nums.length; end++) {
		sum += nums[end];
		while (target <= sum) {
			result = Math.min(result, end - start + 1);
			sum -= nums[start++];
		}
	}
	return result < nums.length + 1 ? result : 0;
};
