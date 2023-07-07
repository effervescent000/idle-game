import { makeGetRequest } from '../../utils/backend-api-service.js';

export const actions = {
	fetch: async () => {
		const result = await makeGetRequest('/recruit');
		return result;
	}
};
