/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let candidate = 0;
    let count = 0;

    // Boyer-Moore Voting Algorithm
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (candidate === num) {
            count++;
        } else {
            count--;
        }
    }

    // Return the candidate (the algorithm assumes there is always a majority element)
    return candidate;
};
