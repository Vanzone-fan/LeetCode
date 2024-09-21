const singleNumber = nums => {
	return nums.reduce((previous, current) => previous ^ current, 0);
};
