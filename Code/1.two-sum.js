/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var res = [];
    var sumMap = new Map();

    nums.forEach((item, index) => {
        const complement = target - item;
        if(sumMap.has(complement)){
            const complementIndex = sumMap.get(complement);
            if(complementIndex !== index){
                res.push(index,complementIndex);
            }
        }
        sumMap.set(item,index);
    });
    return res;
};
// @lc code=end
