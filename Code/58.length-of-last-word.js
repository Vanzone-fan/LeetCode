const lengthOfLastWord = function (s) {
	const array = s.trim().split(' ');
	return array[array.length - 1].length;
};
