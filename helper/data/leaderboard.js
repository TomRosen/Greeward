const getLeaderboardAll = async (limit = 100, skip = 0) => {
	const data = await (
		await fetch('/api/user/get/leaderboard', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ limit, skip }),
		})
	).json();
	return data;
};

export { getLeaderboardAll };
