const climbStairs = n => {
	const dp = [];
	[dp[1], dp[2]] = [1, 2];
	for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
	return dp[n];
};
