/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // init result array with empty arrays with length numRows
    let result = [];

    // fill the arrays
    // rowIndex表示result结果的第几个数组
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        result[rowIndex] = [];
        result[rowIndex][0] = 1;
        for (let num = 1; num < rowIndex; num++) {

            result[rowIndex][num] = result[rowIndex - 1][num - 1] + result[rowIndex - 1][num];
        }
        result[rowIndex][rowIndex] = 1;
    }
    return result;
};

// @lc code=end
generate(5);
console.log("🚀 ~ generate(5):", generate(5));
