export default async ({ url, baseUrl }) => {
	if (url.includes(baseUrl)) {
		return Promise.resolve(url.query?.callbackUrl || url);
	} else {
		return Promise.resolve(baseUrl);
	}
};
