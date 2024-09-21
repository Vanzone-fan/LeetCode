const plusOne = function(digits) {
    return Array.from((BigInt(digits.join("")) + BigInt(1)).toString()).map(Number);
};