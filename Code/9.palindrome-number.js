const isPalindrome = function (x) {
	const string_x = x.toString();
	const length = string_x.length;
	for (let i = 0; i < length - 1 - i; i++) {
		if (string_x[i] !== string_x[length - 1 - i]) {
			return false;
		}
	}
	return true;
};
