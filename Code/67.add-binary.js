/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (BigInt(parseInt(a, 2)) + BigInt(parseInt(b, 2))).toString(2);
};
// @lc code=end
addBinary(11,1)
console.log("🚀 ~ addBinary(11,1):", addBinary(11,1))
addBinary(1010,1011)
console.log("🚀 ~ addBinary(1010,1011):", addBinary(1010,1011))