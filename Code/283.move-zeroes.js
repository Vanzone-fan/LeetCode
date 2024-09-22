/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
	let slowPointer = 0;
	for (const fastItem of nums) {
		if (fastItem !== 0) {
			nums[slowPointer++] = fastItem;
		}
	}
	for (slowPointer; slowPointer < nums.length; slowPointer++) {
		nums[slowPointer] = 0;
	}
};
// @lc code=end
