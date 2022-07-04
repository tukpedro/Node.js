import { Constants } from '../configs/constants.js';
import { Pokemon } from '../models/Pokemon.js';
import { ErrorMessages } from '../utils/error.messages.js';

export class Service {
	static async service(req) {
		const data = Service.dataProvider(req);
		let arr = [];
		try {
			let { results } = await Service.fetchUrl(data.pokemonsUrl);

			let found = results.find((e) => e.name === data.pokemon);
			if (!found) throw (ErrorMessages.pokemonNotFound);

			let pokemonData = await Service.fetchUrl(found.url);
			arr.push(pokemonData);

			pokemonData = await Service.fetchUrl(arr[0].species.url);
			arr.push(pokemonData);

			pokemonData = await Service.fetchUrl(arr[1].evolution_chain.url);
			arr.push(pokemonData);

			return new Pokemon(arr[0], arr[1], arr[2]);
		} catch (error) {
			throw (error);
		}
	}

	static dataProvider(req) {
		const { pokeApi } = Constants;
		let pokemon = req.params.pokemon;
		pokemon = isNaN(parseInt(pokemon, 10)) ? pokemon.toLowerCase() : parseInt(pokemon, 10);
		let pokemonsUrl = pokeApi.url + pokeApi.pokemons + pokeApi.offset;
		let pokemonSpecies = pokeApi.url + pokeApi.pokemonSpecies + pokeApi.offset;
		let evolutionUrl = pokeApi.url + pokeApi.evolutionChain + pokeApi.offset;

		return { pokeApi, pokemon, pokemonsUrl, pokemonSpecies, evolutionUrl };
	}

	static async fetchUrl(param) {
		const res = await fetch(param);
		return await res.json();
	}
}
