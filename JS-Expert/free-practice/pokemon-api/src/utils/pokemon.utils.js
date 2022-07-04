export class PokemonUtils {
	static nameFilter(name) {
		return PokemonUtils.formatName(name);
	}

	static habitatFilter(habitat) {
		return habitat ? PokemonUtils.formatName(habitat.name) : undefined;
	}

	static typesFilter(types) {
		return PokemonUtils.filterTypes(types);
	}

	static spritesFilter(sprites) {
		return PokemonUtils.filterSprites(sprites);
	}

	static evolutionChainFilter(chain) {
		return chain.evolves_to.length === 1 ? PokemonUtils.getEvolutionsInfo(chain) : PokemonUtils.getEvolutionVariations(chain);
	}

	static movesFilter(moves) {
		return PokemonUtils.filterMoves(moves);
	}
	
	static filterGender(gender) {
		return gender === 1 ? 'Female' : 'Male';
	}

	static formatName(name) {
		const firsLetter = name.charAt(0).toUpperCase();
		const lastLetters = name.substring(1);
		return firsLetter + lastLetters;
	}

	static filterSprites(sprites) {
		const { front_default, back_default, front_shiny, back_shiny } = sprites;
		return {
			front_default: front_default ? front_default : undefined,
			back_default: back_default ? back_default : undefined,
			front_shiny: front_shiny ? front_shiny : undefined,
			back_shiny: back_shiny ? back_shiny : undefined,
		};
	}

	static filterMoves(moves) {
		moves.forEach((move) => delete move.version_group_details);
		for (let i in moves) {
			moves[i] = PokemonUtils.formatName(moves[i].move.name);
		}
		return moves;
	}

	static filterTypes(types) {
		types.forEach((type) => delete type.slot);
		for (let i in types) {
			types[i] = PokemonUtils.formatName(types[i].type.name);
		}
		return types;
	}

	static getEvolutionsInfo(chain) {
		const obj = PokemonUtils.buildFirstObject(chain);

		const b = chain.evolves_to.length <= 1 ? true : false;
		if (b) {
			obj[`${chain.evolves_to[0]?.evolves_to[0]?.evolves_to ? 'second_form' : 'final_form'}`] = {
				name: PokemonUtils.formatName(chain.evolves_to[0]?.species?.name),
				evolution_trigger: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.trigger
					? PokemonUtils.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.trigger.name)
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
					? PokemonUtils.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.held_item.name)
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
					? PokemonUtils.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.location.name)
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
					? PokemonUtils.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.item.name)
					: undefined,
			};
		}

		const c = chain.evolves_to[0]?.evolves_to[0]?.evolves_to ? true : false;
		if (c) {
			if (chain.evolves_to[0]?.evolves_to.length > 1) {
				for (let i in chain.evolves_to[0]?.evolves_to) {
					obj[`final_form_${parseInt(i) + 1}`] = {
						name: PokemonUtils.formatName(chain.evolves_to[0]?.evolves_to[i]?.species?.name),
						evolution_trigger: PokemonUtils.formatName(chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.trigger?.name),
						evolution_level:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.min_level === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.min_level,
						gender:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.gender === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.gender,
						held_item:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.held_item === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.held_item,
						known_move:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.known_move === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.known_move,
						known_move_type:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.known_move_type === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.known_move_type.name,
						location:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.location === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.location.name,
						min_affection:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.min_affection === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.min_affection,
						min_beauty:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.min_beauty === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.min_beauty,
						min_happiness:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.min_happiness === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.min_happiness,
						needs_overworld_rain:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.needs_overworld_rain === false
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.needs_overworld_rain,
						party_species:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.party_species === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.party_species,
						party_type:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.party_type === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.party_type,
						relative_physical_stats:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.relative_physical_stats === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.relative_physical_stats,
						time_of_day:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.time_of_day === ''
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.time_of_day,
						trade_species:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.trade_species === null
								? undefined
								: chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.trade_species,
						item:
							chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.item === null
								? undefined
								: PokemonUtils.formatName(chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.item.name),
					};
				}
			} else {
				obj[`final_form`] = {
					name: PokemonUtils.formatName(chain.evolves_to[0]?.evolves_to[0]?.species?.name),
				};
			}
		}

		return obj;
	}

	static getEvolutionVariations(chain) {
		const obj = PokemonUtils.buildFirstObject(chain);

		const a = chain.evolves_to.length > 1 ? true : false;
		if (a) {
			for (let i in chain.evolves_to) {
				obj[`final_form_${parseInt(i) + 1}`] = {
					name: PokemonUtils.formatName(chain.evolves_to[i]?.species?.name),
					evolution_trigger: PokemonUtils.formatName(chain.evolves_to[i]?.evolution_details[0]?.trigger?.name),
					evolution_level:
						chain.evolves_to[i]?.evolution_details[0]?.min_level === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.min_level,
					gender:
						chain.evolves_to[i]?.evolution_details[0]?.gender === null
							? undefined
							: PokemonUtils.filterGender(chain.evolves_to[i]?.evolution_details[0]?.gender),
					held_item: chain.evolves_to[i]?.evolution_details[0]?.held_item === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.held_item,
					known_move:
						chain.evolves_to[i]?.evolution_details[0]?.known_move === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.known_move,
					known_move_type:
						chain.evolves_to[i]?.evolution_details[0]?.known_move_type === null
							? undefined
							: PokemonUtils.formatName(chain.evolves_to[i]?.evolution_details[0]?.known_move_type.name),
					location:
						chain.evolves_to[i]?.evolution_details[0]?.location === null
							? undefined
							: PokemonUtils.formatName(chain.evolves_to[i]?.evolution_details[0]?.location.name),
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
						chain.evolves_to[i]?.evolution_details[0]?.time_of_day === ''
							? undefined
							: PokemonUtils.formatName(chain.evolves_to[i]?.evolution_details[0]?.time_of_day),
					trade_species:
						chain.evolves_to[i]?.evolution_details[0]?.trade_species === null
							? undefined
							: chain.evolves_to[i]?.evolution_details[0]?.trade_species,
					item:
						chain.evolves_to[i]?.evolution_details[0]?.item === null
							? undefined
							: PokemonUtils.formatName(chain.evolves_to[i]?.evolution_details[0]?.item.name),
				};

				obj[`final_form_${parseInt(i) + 1}`].name === 'Hitmonlee' || 'Hitmonchan' || 'Hitmontop'
					? delete obj[`final_form_${parseInt(i) + 1}`].evolution_level
					: null;
			}
		}
		return obj;
	}

	static buildFirstObject(chain) {
		const obj = {};

		obj[`first_form`] = {
			name: PokemonUtils.formatName(chain.species?.name),
			evolution_trigger: PokemonUtils.formatName(chain.evolves_to[0]?.evolution_details[0]?.trigger?.name),
			evolution_level: chain.evolves_to[0]?.evolution_details[0]?.min_level === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.min_level,
			// gender: chain.evolves_to[0]?.evolution_details[0]?.gender === null ? undefined : PokemonUtils.filterGender(chain.evolves_to[0]?.evolution_details[0]?.gender),
			held_item:
				chain.evolves_to[0]?.evolution_details[0]?.held_item === null
					? undefined
					: PokemonUtils.formatName(chain.evolves_to[0]?.evolution_details[0]?.held_item.name),
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
			time_of_day:
				chain.evolves_to[0]?.evolution_details[0]?.time_of_day === ''
					? undefined
					: PokemonUtils.formatName(chain.evolves_to[0]?.evolution_details[0]?.time_of_day),
			trade_species:
				chain.evolves_to[0]?.evolution_details[0]?.trade_species === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.trade_species,
			item: chain.evolves_to[0]?.evolution_details[0]?.item === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.item.name,
		};

		obj.first_form.name === 'Eevee' ? delete obj.first_form.item : null;

		return obj;
	}
}