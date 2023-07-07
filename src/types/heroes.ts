export interface Recruit {
	name: string;
	level: number;
	max_health: number;
	max_mana: number;
}

export interface Hero extends Recruit {
	id: number;
}
