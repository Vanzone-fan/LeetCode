/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var numStr = x.toString();
    var len = numStr.length;
    for(var i = 0;i<len/2;i++){
        if(numStr[i]!=numStr[len-1-i]){
            return false;
        }
    }
    return true;
};
// @lc code=end


