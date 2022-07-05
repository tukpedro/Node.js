import { ResponseDtoUtils } from '../utils/response.dto.utils.js';
export class ResponseDto {
	constructor({ moves, name, sprites, types }, { id, habitat }, { chain }) {
		this.name = ResponseDtoUtils.nameFilter(name);
		this.id = id;
		this.types = ResponseDtoUtils.typesFilter(types);
		this.habitat = ResponseDtoUtils.habitatFilter(habitat);
		this.sprites = ResponseDtoUtils.spritesFilter(sprites);
		this.evolution_chain = ResponseDtoUtils.evolutionChainFilter(chain);
		this.moves = ResponseDtoUtils.movesFilter(moves);
	};
}
