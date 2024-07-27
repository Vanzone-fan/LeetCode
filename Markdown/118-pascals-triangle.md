# pascals-triangle 2024-07-26

**最原始的代码**
```javascript
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
    for (let i = 0; i < numRows; i++) {
        result[i] = [];
    }
    // fill the arrays
    // rowIndex表示result结果的第几个数组
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        for (let num = 0; num <= rowIndex; num++) {
            //组合公式
            // result[rowIndex][num] = C(rowIndex, num)
            result[rowIndex][num] = C(rowIndex, num)
        }
    }
    return result;
};
var C = function (n, k) {
    if( k === 0 || k === n ){
        return 1;
    }

    return C(n-1, k-1) + C(n-1, k);
}
// @lc code=end
generate(5);
console.log("🚀 ~ generate(5):", generate(5));

```
**代码评估**
- 代码逻辑清晰，没有问题
- 递归超时，需要优化
- 第一重循环定填充哪个数组，第二重循环定填充数组中的元素，第三重循环（递归）计算组合数C(rowIndex, num)

**GPT代码**
```javascript
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
    // Initialize result array
    let result = [];

    // Fill the arrays
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        result[rowIndex] = [];
        // Each row starts with 1
        result[rowIndex][0] = 1;
        // Compute the intermediate values using the previous row
        for (let num = 1; num < rowIndex; num++) {
            result[rowIndex][num] = result[rowIndex - 1][num - 1] + result[rowIndex - 1][num];
        }
        // Each row ends with 1
        result[rowIndex][rowIndex] = 1;
    }

    return result;
};
// @lc code=end

console.log("🚀 ~ generate(5):", generate(5));

```
**代码评估**
- 解决超时问题
- 优化递归，初始化工作也放在外层循环里，对于除去头尾的组合数计算，只需要用到前一行的组合数即可，不需要递归计算
- 仍然是递归和动态规划问题

**leetcode solution**
```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 初始化结果数组，包含第一个元素 [1]
    const res = [[1]];

    // 遍历生成 numRows 行
    for (let i = 0; i < numRows - 1; i++) {
        // 创建一个虚拟行，在当前行的两端加上 0
        const dummyRow = [0, ...res[res.length - 1], 0];
        // 用于存储新行的数组
        const row = [];

        // 计算新行的每个元素
        for (let j = 0; j < dummyRow.length - 1; j++) {
            row.push(dummyRow[j] + dummyRow[j + 1]);
        }

        // 将新行添加到结果数组中
        res.push(row);
    }

    return res;
};

console.log("🚀 ~ generate(5):", generate(5))
```

**代码评估**
- dummyRow在上一行基础两端加0，相邻数字相加