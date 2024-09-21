const searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length-1;
	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		if (nums[mid] === target) return mid;
		else {
			nums[mid] < target ? (left = mid + 1) : (right = mid - 1);
		}
	}
    return left;
};
