/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return Array.from((BigInt(digits.join("")) + BigInt(1)).toString());
    // return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};
// @lc code=end

