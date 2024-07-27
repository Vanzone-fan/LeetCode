/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    low = 0;
    high = nums.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};
// @lc code=end
