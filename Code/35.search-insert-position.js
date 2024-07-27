/*
 * @Author: github Vanzone-fan github fanzong889@gmail.com
 * @Date: 2024-07-27 12:53:46
 * @LastEditors: github Vanzone-fan github fanzong889@gmail.com
 * @LastEditTime: 2024-07-27 13:36:49
 * @FilePath: \LeetCode\Code\35.search-insert-position.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

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
var searchInsert = function(nums, target) {
    // nums includes target
    // return index of target
    // nums does not include target
    // return index of smaller element
    if(nums.includes(target)){
        return nums.indexOf(target);
    }else{
        nums.push(target);
        nums.sort((a,b) => a-b);
        return nums.indexOf(target);
    }
    // 时间复杂度是O(nlogn) 不满足要求
};
// @lc code=end

