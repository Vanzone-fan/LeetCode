const getRow = rowIndex => {
	const array = new Array(rowIndex + 1).fill(0).map((value, index) => new Array(index + 1).fill(1));
	for (let row = 2; row < rowIndex + 1; row++) {
		for (let index = 1; index < row; index++) {
			array[row][index] = array[row - 1][index - 1] + array[row - 1][index];
		}
	}
	return array[rowIndex];
};
