import { ServiceUtils } from '../utils/service.utils.js';
import { ErrorMessages } from '../utils/error.messages.js';
import { PokemonResponseDto } from '../dto/pokemon.response.dto.js';

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

			const obj = {
				baby_trigger_item: null,
				chain: {
					evolution_details: null,
					evolves_to: [],
					is_baby: null,
					species: null,
					url: null,
				},
				id: arr[1].id,
			};

			pokemonData = pokemonData.evolution_chain ? await ServiceUtils.fetchUrl(arr[1].evolution_chain.url) : obj;
			arr.push(pokemonData);

			return new PokemonResponseDto(arr[0], arr[1], arr[2]);
		} catch (error) {
			throw error;
		}
	}
}
