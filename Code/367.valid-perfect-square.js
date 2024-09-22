/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	if (num === 1) return true;
	let [left, right] = [1, num];
	while (left <= right) {
		let middle = left + Math.floor((right - left) / 2);
		const square = middle * middle;
		if (square < num) left = middle + 1;
		else if (square > num) right = middle - 1;
		else return true;
	}
	return false;
};
// @lc code=end
