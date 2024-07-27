/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [];
    [ result[0], result[rowIndex] ] = [ 1, 1 ];
    // 计算前一半 递归 后一半对称
    // rowIndex = 0 return [1]
    // rowIndex = 1 return [1, 1]
    // rowIndex = 2 return [1, 2, 1] half 1
    // rowIndex = 3 return [1, 3, 3, 1] half 1
    // rowIndex = 4 return [1, 4, 6, 4, 1] half 2
    // rowIndex = 5 return [1, 5, 10, 10, 5, 1] half 2
    // rowIndex = 6 return [1, 6, 15, 20, 15, 6, 1] half 3
    for(let i = 1; i <= Math.floor(rowIndex / 2) ; i++) {
        result[i] = result[i-1] * (rowIndex - (i-1)) / i;
    }
    for(let i = 1 + Math.floor(rowIndex / 2); i < rowIndex; i++) {
        result[i] = result[rowIndex-i];
    }
    return result;

};
// @lc code=end

