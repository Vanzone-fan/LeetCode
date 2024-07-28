/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    sum = calc(n);
    while (sum >= 10) {
        sum = calc(sum);
    }
    if (sum === 1 || sum === 7) { return true; }
    return false;
};

/**
 * @param {number} n
 * @return {boolean}
 */
function calc(n) {
    sum = 0;
    while (n > 0) {
        digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    console.log(sum);
    return sum;
}
// @lc code=end
isHappy(1111111);
