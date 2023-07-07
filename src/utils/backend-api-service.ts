const BASE_URL = 'http://localhost:8000';

const makeUrlWithParams = (url: string, params: Record<string, string | number>) =>
	url +
	'?' +
	Object.entries(params)
		.map(([key, value]) => `${key}=${value}`)
		.join('&');

const GET = async (url: string, params: Record<string, string | number> = {}) => {
	const fullUrl = makeUrlWithParams(url, params);
	try {
		const response = await fetch(fullUrl);
		const result = await response.json();
		return result;
	} catch (error) {
		return { error: 'Error fetching' };
	}
};

export const makeGetRequest = async (
	endpoint: string,
	params: Record<string, string | number> = {}
) => {
	const url = BASE_URL + endpoint;
	const result = await GET(url, params);
	return result.data;
};
