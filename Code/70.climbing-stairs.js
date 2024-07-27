/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;
    
    let pre1 = 3;
    let pre2 = 2;
    let current;
    
    for (let i = 3; i < n; i++) {
        current = pre1 + pre2;
        pre2 = pre1;
        pre1 = current;
    }

    return current;
};
