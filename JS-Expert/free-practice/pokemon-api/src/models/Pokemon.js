export class Pokemon {
	constructor({ id, moves, name, sprites, types }, { habitat }, { chain }) {
		this.name = this.formatName(name);
		this.sprites = this.filterSprites(sprites);
		this.id = id;
		this.types = this.filterTypes(types);
		this.evolution_chain = chain.evolves_to.length === 1 ? this.getEvolutionsInfo(chain) : this.getEvolutionVariations(chain);
		this.habitat = habitat ? this.formatName(habitat.name) : undefined;
		this.moves = this.filterMoves(moves);
	}

	formatName(name) {
		const firsLetter = name.charAt(0).toUpperCase();
		const lastLetters = name.substring(1);
		return firsLetter + lastLetters;
	}

	filterSprites(sprites) {
		const { front_default, back_default, front_shiny, back_shiny } = sprites;
		return { front_default, back_default, front_shiny, back_shiny };
	}

	filterMoves(moves) {
		moves.forEach((move) => delete move.version_group_details);
		for (let i in moves) {
			moves[i] = this.formatName(moves[i].move.name);
		}
		return moves;
	}

	filterTypes(types) {
		types.forEach((type) => delete type.slot);
		for (let i in types) {
			types[i] = this.formatName(types[i].type.name);
		}
		return types;
	}

	getEvolutionsInfo(chain) {
		const obj = {};

		obj[`form_1`] = {
			name: this.formatName(chain.species?.name),
			evolution_trigger: this.formatName(chain.evolves_to[0]?.evolution_details[0]?.trigger?.name),
			evolution_level: chain.evolves_to[0]?.evolution_details[0]?.min_level === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.min_level,
			gender: chain.evolves_to[0]?.evolution_details[0]?.gender === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.gender,
			held_item:
				chain.evolves_to[0]?.evolution_details[0]?.held_item === null
					? undefined
					: this.formatName(chain.evolves_to[0]?.evolution_details[0]?.held_item.name),
			known_move: chain.evolves_to[0]?.evolution_details[0]?.known_move === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.known_move,
			known_move_type:
				chain.evolves_to[0]?.evolution_details[0]?.known_move_type === null
					? undefined
					: chain.evolves_to[0]?.evolution_details[0]?.known_move_type.name,
			location: chain.evolves_to[0]?.evolution_details[0]?.location === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.location.name,
			min_affection:
				chain.evolves_to[0]?.evolution_details[0]?.min_affection === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.min_affection,
			min_beauty: chain.evolves_to[0]?.evolution_details[0]?.min_beauty === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.min_beauty,
			min_happiness:
				chain.evolves_to[0]?.evolution_details[0]?.min_happiness === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.min_happiness,
			needs_overworld_rain:
				chain.evolves_to[0]?.evolution_details[0]?.needs_overworld_rain === false
					? undefined
					: chain.evolves_to[0]?.evolution_details[0]?.needs_overworld_rain,
			party_species:
				chain.evolves_to[0]?.evolution_details[0]?.party_species === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.party_species,
			party_type: chain.evolves_to[0]?.evolution_details[0]?.party_type === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.party_type,
			relative_physical_stats:
				chain.evolves_to[0]?.evolution_details[0]?.relative_physical_stats === null
					? undefined
					: chain.evolves_to[0]?.evolution_details[0]?.relative_physical_stats,
			time_of_day: chain.evolves_to[0]?.evolution_details[0]?.time_of_day === '' ? undefined : this.formatName(chain.evolves_to[0]?.evolution_details[0]?.time_of_day),
			trade_species:
				chain.evolves_to[0]?.evolution_details[0]?.trade_species === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.trade_species,
			item: chain.evolves_to[0]?.evolution_details[0]?.item === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.item.name,
		};

		const b = chain.evolves_to[0].evolves_to.length <= 1 ? true : false;
		if (b) {
			obj[`${chain.evolves_to[0]?.evolves_to[0]?.evolves_to ? 'form_2' : 'final_form'}`] = {
				name: this.formatName(chain.evolves_to[0]?.species?.name),
				evolution_trigger: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.trigger
					? this.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.trigger.name)
					: undefined,
				evolution_level:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_level === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_level,
				gender:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.gender === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.gender,
				held_item: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.held_item
					? this.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.held_item.name)
					: undefined,
				known_move:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.known_move === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.known_move,
				known_move_type:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.known_move_type === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.known_move_type.name,
				location: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.location
					? this.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.location.name)
					: undefined,
				min_affection:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_affection === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_affection,
				min_beauty:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_beauty === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_beauty,
				min_happiness:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_happiness === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_happiness,
				needs_overworld_rain:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.needs_overworld_rain === false
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.needs_overworld_rain,
				party_species:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.party_species === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.party_species,
				party_type:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.party_type === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.party_type,
				relative_physical_stats:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.relative_physical_stats === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.relative_physical_stats,
				time_of_day:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.time_of_day === ''
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.time_of_day,
				trade_species:
					chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.trade_species === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.trade_species,
				item: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.item
					? this.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.item.name)
					: undefined,
			};
		}

		const c = chain.evolves_to[0]?.evolves_to[0]?.evolves_to ? true : false;
		if (c) {
			obj[`final_form`] = {
				name: this.formatName(chain.evolves_to[0]?.evolves_to[0]?.species?.name),
				evolution_trigger: chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.trigger,
				evolution_level:
					chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_level === null
						? undefined
						: chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_level,
			};
		}

		return obj;
	}

	getEvolutionVariations(chain) {
		const obj = {};
		const a = chain.evolves_to.length > 1 ? true : false;
		if (a) {
			for (let i in chain.evolves_to) {
				obj[`form_${parseInt(i) + 1}`] = {
					name: this.formatName(chain.evolves_to[i]?.species?.name),
					evolution_trigger: this.formatName(chain.evolves_to[i]?.evolution_details[0]?.trigger?.name),
					evolution_level:
						chain.evolves_to[i]?.evolution_details[0]?.min_level === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.min_level,
					gender: chain.evolves_to[i]?.evolution_details[0]?.gender === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.gender,
					held_item: chain.evolves_to[i]?.evolution_details[0]?.held_item === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.held_item,
					known_move:
						chain.evolves_to[i]?.evolution_details[0]?.known_move === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.known_move,
					known_move_type:
						chain.evolves_to[i]?.evolution_details[0]?.known_move_type === null
							? undefined
							: this.formatName(chain.evolves_to[i]?.evolution_details[0]?.known_move_type.name),
					location:
						chain.evolves_to[i]?.evolution_details[0]?.location === null ? undefined : this.formatName(chain.evolves_to[i]?.evolution_details[0]?.location.name),
					min_affection:
						chain.evolves_to[i]?.evolution_details[0]?.min_affection === null
							? undefined
							: chain.evolves_to[i]?.evolution_details[0]?.min_affection,
					min_beauty:
						chain.evolves_to[i]?.evolution_details[0]?.min_beauty === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.min_beauty,
					min_happiness:
						chain.evolves_to[i]?.evolution_details[0]?.min_happiness === null
							? undefined
							: chain.evolves_to[i]?.evolution_details[0]?.min_happiness,
					needs_overworld_rain:
						chain.evolves_to[i]?.evolution_details[0]?.needs_overworld_rain === false
							? undefined
							: chain.evolves_to[i]?.evolution_details[0]?.needs_overworld_rain,
					party_species:
						chain.evolves_to[i]?.evolution_details[0]?.party_species === null
							? undefined
							: chain.evolves_to[i]?.evolution_details[0]?.party_species,
					party_type:
						chain.evolves_to[i]?.evolution_details[0]?.party_type === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.party_type,
					relative_physical_stats:
						chain.evolves_to[i]?.evolution_details[0]?.relative_physical_stats === null
							? undefined
							: chain.evolves_to[i]?.evolution_details[0]?.relative_physical_stats,
					time_of_day:
						chain.evolves_to[i]?.evolution_details[0]?.time_of_day === '' ? undefined : this.formatName(chain.evolves_to[i]?.evolution_details[0]?.time_of_day),
					trade_species:
						chain.evolves_to[i]?.evolution_details[0]?.trade_species === null
							? undefined
							: chain.evolves_to[i]?.evolution_details[0]?.trade_species,
					item:
						chain.evolves_to[i]?.evolution_details[0]?.item === null
							? undefined
							: this.formatName(chain.evolves_to[i]?.evolution_details[0]?.item.name),
				};
			}
		}
		return obj;
	}
}
