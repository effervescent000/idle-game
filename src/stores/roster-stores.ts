import { writable } from 'svelte/store';

import type { Hero, Recruit } from '../types/heroes';

const makeHeroesStore = () => {
	const { subscribe, set, update } = writable<Hero[]>([]);

	const append = (hero: Hero) => update((r) => [...r, hero]);
	const remove = (hero: Hero) => update((r) => r.filter(({ id }) => id !== hero.id));

	return { subscribe, append, remove, set };
};

export const rosterStore = makeHeroesStore();

export const recruitStore = writable<Recruit[]>([]);
