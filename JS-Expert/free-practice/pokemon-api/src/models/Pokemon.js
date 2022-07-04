import { Utils } from "../utils/utils.js";
export class Pokemon {
	constructor({ id, moves, name, sprites, types }, { habitat }, { chain }) {
		this.name = Utils.formatName(name);
		this.sprites = Utils.filterSprites(sprites);
		this.id = id;
		this.types = Utils.filterTypes(types);
		this.evolution_chain = chain.evolves_to.length === 1 ? Utils.getEvolutionsInfo(chain) : Utils.getEvolutionVariations(chain);
		this.habitat = habitat ? Utils.formatName(habitat.name) : undefined;
		this.moves = Utils.filterMoves(moves);
	}
}
