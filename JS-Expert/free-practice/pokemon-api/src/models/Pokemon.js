import { PokemonUtils } from '../utils/pokemon.utils.js';
export class Pokemon {
	constructor({ id, moves, name, sprites, types }, { habitat }, { chain }) {
		this.name = PokemonUtils.nameFilter(name);
		this.id = id;
		this.types = PokemonUtils.typesFilter(types);
		this.habitat = PokemonUtils.habitatFilter(habitat);
		this.sprites = PokemonUtils.spritesFilter(sprites);
		this.evolution_chain = PokemonUtils.evolutionChainFilter(chain);
		this.moves = PokemonUtils.movesFilter(moves);
	}
}
