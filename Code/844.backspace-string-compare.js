/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const adjust = str => {
	let array = str.split('');
	let slowPointer = 0;
	for (const fastItem of str) {
		if (fastItem !== '#') array[slowPointer++] = fastItem;
		else if (slowPointer > 0) {
			slowPointer--;
		}
	}
	return array.slice(0, slowPointer).join('');
};

const backspaceCompare = function (s, t) {
	console.log(adjust(s) === adjust(t));
	return adjust(s) === adjust(t);
};
backspaceCompare('ab#c', 'ad#c');
// @lc code=end
