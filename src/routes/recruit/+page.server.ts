import { redirect } from '@sveltejs/kit';
import { makeGetRequest } from '../../utils/backend-api-service.js';
import { recruitStore } from '../../stores/roster-stores.js';

export const actions = {
	fetch: async () => {
		const result = await makeGetRequest('/recruit');
		recruitStore.set(result);
		throw redirect(303, '/recruit');
	}
};
