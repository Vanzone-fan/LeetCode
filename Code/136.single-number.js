/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// O(n) time complexity
// O(1) space complexity

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
    let counts = {};
    nums.forEach((num) => {
        if (counts[num]) {
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
    });
    for (item in counts) {
        if (counts[item] === 1) {
            return item;
        }
    }
};
// @lc code=end
console.log(singleNumber([1, 2, 1, 3, 2]));
