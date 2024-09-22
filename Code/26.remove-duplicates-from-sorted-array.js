const removeDuplicates = function (nums) {
	let slowPointer = 0;
	for (const fastPointerItem of nums){
		if(nums[slowPointer]!==fastPointerItem){
			nums[++slowPointer]=fastPointerItem
		}
	}
	return slowPointer+1
};
// @lc code=end
removeDuplicates([1, 1, 2]);
