/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for(let i=0;i<=x;i++){
        if(i*i>x){
            return i-1;
        }
        if(i*i===x){
            return i;
        }
    }
};
// @lc code=end

