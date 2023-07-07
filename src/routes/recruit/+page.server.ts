import { redirect } from '@sveltejs/kit';
import { makeGetRequest } from '../../utils/backend-api-service.js';
import { recruitStore } from '../../stores/roster-stores.js';

export const load = async () => {
	const result = await makeGetRequest('/recruit');
	return { data: result };
};

export const actions = {
	fetch: async () => {
		const result = await makeGetRequest('/recruit');
		// recruitStore.set(result);
		return { data: result };
	}
};
