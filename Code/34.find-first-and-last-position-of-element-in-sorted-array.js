const searchRange = (nums, target) => {
	let result = [-1, -1];
	let [left, right] = [0, nums.length - 1];
	while (left <= right) {
		let middle = left + Math.floor((right - left) / 2);
		if (nums[middle] < target) {
			left = middle + 1;
		} else if (nums[middle] > target) right = middle - 1;
		else {
			result[0] = middle;
			right = middle - 1;
		}
	}
	[left, right] = [0, nums.length - 1];
	while (left <= right) {
		let middle = left + Math.floor((right - left) / 2);
		if (nums[middle] < target) {
			left = middle + 1;
		} else if (nums[middle] > target) right = middle - 1;
		else {
			result[1] = middle;
			left = middle + 1;
		}
	}
	return result;
};
