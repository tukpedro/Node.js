import { ResponseDtoUtils } from '../utils/response.dto.utils.js';
import { ServiceUtils } from '../utils/service.utils.js';
import { ErrorMessages } from '../utils/error.messages.js';
import { ResponseDto } from '../dto/response.dto.js';

export class Service {
	static async service(req) {
		const data = ServiceUtils.dataProvider(req);
		let arr = [];
		try {
			let found;
			let { results } = await ServiceUtils.fetchUrl(data.pokemonsUrl);
			if (isNaN(data.pokemon)) {
				found = results.find((e) => e.name === data.pokemon);
				if (!found) throw ErrorMessages.pokemonNotFound;
			} else {
				found = results.at(data.pokemon - 1);
				if (!found) throw ErrorMessages.pokemonNotFound;
			}

			let pokemonData = await ServiceUtils.fetchUrl(found.url);
			arr.push(pokemonData);

			pokemonData = await ServiceUtils.fetchUrl(arr[0].species.url);
			arr.push(pokemonData);

			pokemonData = pokemonData.evolution_chain ? await ServiceUtils.fetchUrl(arr[1].evolution_chain.url) : ResponseDtoUtils.standardChainObj(arr);
			arr.push(pokemonData);

			return new ResponseDto(arr[0], arr[1], arr[2]);
		} catch (error) {
			throw error;
		}
	}
}
