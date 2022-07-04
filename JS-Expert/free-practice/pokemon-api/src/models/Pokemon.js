import { PokemonUtils } from "../utils/pokemon-utils.js";
export class Pokemon {
	constructor({ id, moves, name, sprites, types }, { habitat }, { chain }) {
		this.name = PokemonUtils.formatName(name);
		this.sprites = PokemonUtils.filterSprites(sprites);
		this.id = id;
		this.types = PokemonUtils.filterTypes(types);
		this.evolution_chain = chain.evolves_to.length === 1 ? PokemonUtils.getEvolutionsInfo(chain) : PokemonUtils.getEvolutionVariations(chain);
		this.habitat = habitat ? PokemonUtils.formatName(habitat.name) : undefined;
		this.moves = PokemonUtils.filterMoves(moves);
	}
}
