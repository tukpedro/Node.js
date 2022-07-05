import { PokemonUtils } from '../utils/pokemon.utils.js';
export class PokemonResponseDto {
	constructor({ moves, name, sprites, types }, { id, habitat }, { chain }) {
		this.name = PokemonUtils.nameFilter(name);
		this.id = id;
		this.types = PokemonUtils.typesFilter(types);
		this.habitat = PokemonUtils.habitatFilter(habitat);
		this.sprites = PokemonUtils.spritesFilter(sprites);
		this.evolution_chain = PokemonUtils.evolutionChainFilter(chain);
		this.moves = PokemonUtils.movesFilter(moves);
	}
}
