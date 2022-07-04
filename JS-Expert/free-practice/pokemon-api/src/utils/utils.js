export class Utils {
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
			moves[i] = Utils.formatName(moves[i].move.name);
		}
		return moves;
	}

	static filterTypes(types) {
		types.forEach((type) => delete type.slot);
		for (let i in types) {
			types[i] = Utils.formatName(types[i].type.name);
		}
		return types;
	}

	static getEvolutionsInfo(chain) {
		const obj = Utils.buildFirstObject(chain);

		const b = chain.evolves_to.length <= 1 ? true : false;
		if (b) {
			obj[`${chain.evolves_to[0]?.evolves_to[0]?.evolves_to ? 'form_2' : 'final_form'}`] = {
				name: Utils.formatName(chain.evolves_to[0]?.species?.name),
				evolution_trigger: chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.trigger
					? Utils.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.trigger.name)
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
					? Utils.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.held_item.name)
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
					? Utils.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.location.name)
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
					? Utils.formatName(chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.item.name)
					: undefined,
			};
		}

		const c = chain.evolves_to[0]?.evolves_to[0]?.evolves_to ? true : false;
		if (c) {
			if (chain.evolves_to[0]?.evolves_to.length > 1) {
				for (let i in chain.evolves_to[0]?.evolves_to) {
					obj[`final_form_${parseInt(i) + 1}`] = {
						name: Utils.formatName(chain.evolves_to[0]?.evolves_to[i]?.species?.name),
						evolution_trigger: Utils.formatName(chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.trigger?.name),
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
								: Utils.formatName(chain.evolves_to[0]?.evolves_to[i]?.evolution_details[0]?.item.name),
					};
				}
			} else {
				obj[`final_form`] = {
					name: Utils.formatName(chain.evolves_to[0]?.evolves_to[0]?.species?.name),
				};
			}
		}

		return obj;
	}

	static getEvolutionVariations(chain) {
		const obj = Utils.buildFirstObject(chain);

		const a = chain.evolves_to.length > 1 ? true : false;
		if (a) {
			for (let i in chain.evolves_to) {
				obj[`final_form_${parseInt(i) + 1}`] = {
					name: Utils.formatName(chain.evolves_to[i]?.species?.name),
					evolution_trigger: Utils.formatName(chain.evolves_to[i]?.evolution_details[0]?.trigger?.name),
					evolution_level:
						chain.evolves_to[i]?.evolution_details[0]?.min_level === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.min_level,
					gender:
						chain.evolves_to[i]?.evolution_details[0]?.gender === null
							? undefined
							: Utils.filterGender(chain.evolves_to[i]?.evolution_details[0]?.gender),
					held_item: chain.evolves_to[i]?.evolution_details[0]?.held_item === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.held_item,
					known_move:
						chain.evolves_to[i]?.evolution_details[0]?.known_move === null ? undefined : chain.evolves_to[i]?.evolution_details[0]?.known_move,
					known_move_type:
						chain.evolves_to[i]?.evolution_details[0]?.known_move_type === null
							? undefined
							: Utils.formatName(chain.evolves_to[i]?.evolution_details[0]?.known_move_type.name),
					location:
						chain.evolves_to[i]?.evolution_details[0]?.location === null
							? undefined
							: Utils.formatName(chain.evolves_to[i]?.evolution_details[0]?.location.name),
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
							: Utils.formatName(chain.evolves_to[i]?.evolution_details[0]?.time_of_day),
					trade_species:
						chain.evolves_to[i]?.evolution_details[0]?.trade_species === null
							? undefined
							: chain.evolves_to[i]?.evolution_details[0]?.trade_species,
					item:
						chain.evolves_to[i]?.evolution_details[0]?.item === null
							? undefined
							: Utils.formatName(chain.evolves_to[i]?.evolution_details[0]?.item.name),
                };
                
                obj[`final_form_${parseInt(i) + 1}`].name === 'Hitmonlee' || 'Hitmonchan' || 'Hitmontop' ? delete obj[`final_form_${parseInt(i) + 1}`].evolution_level : undefined;
			}
		}
		return obj;
	}

	static buildFirstObject(chain) {
		const obj = {};

		obj[`form_1`] = {
			name: Utils.formatName(chain.species?.name),
			evolution_trigger: Utils.formatName(chain.evolves_to[0]?.evolution_details[0]?.trigger?.name),
			evolution_level: chain.evolves_to[0]?.evolution_details[0]?.min_level === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.min_level,
			// gender: chain.evolves_to[0]?.evolution_details[0]?.gender === null ? undefined : Utils.filterGender(chain.evolves_to[0]?.evolution_details[0]?.gender),
			held_item:
				chain.evolves_to[0]?.evolution_details[0]?.held_item === null
					? undefined
					: Utils.formatName(chain.evolves_to[0]?.evolution_details[0]?.held_item.name),
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
					: Utils.formatName(chain.evolves_to[0]?.evolution_details[0]?.time_of_day),
			trade_species:
				chain.evolves_to[0]?.evolution_details[0]?.trade_species === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.trade_species,
			item: chain.evolves_to[0]?.evolution_details[0]?.item === null ? undefined : chain.evolves_to[0]?.evolution_details[0]?.item.name,
		};

		obj.form_1.name === 'Eevee' ? delete obj.form_1.item : undefined;

		return obj;
	}
}