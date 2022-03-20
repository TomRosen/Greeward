const getEngagementsAll = async (limit = -1, skip = 0) => {
	let data = await fetch('/api/engagements/get/all', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ limit, skip }),
	}).then((res) => res.json());
	return data;
};

const getEngagementsQuery = async (filter = {}) => {
	let data = await fetch('/api/engagements/get/query', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ filter }),
	}).then((res) => res.json());
	return data;
};

export { getEngagementsAll, getEngagementsQuery };
