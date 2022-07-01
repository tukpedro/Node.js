export class Pokemon {
	constructor({ id, moves, name, sprites, types }, { evolves_from_species, habitat }) {
		this.name = name;
		this.id = id;
		this.evolves_from = evolves_from_species.name;
		this.types = this.filterTypes(types);
		this.habitat = habitat.name;
		this.sprites = this.filterSprites(sprites);
		this.moves = this.filterMoves(moves); //moves
	}

	filterSprites(sprites) {
		delete sprites.other;
		delete sprites.versions;
		return sprites;
	}

	filterMoves(moves) {
		moves.forEach((move) => delete move.version_group_details);
		for (let i in moves) {
			moves[i] = moves[i].move.name;
		}
		return moves;
	}

	filterTypes(types) {
		types.forEach((type) => delete type.slot);
		for (let i in types) {
			types[i] = types[i].type.name;
		}
		return types;
	}
}
