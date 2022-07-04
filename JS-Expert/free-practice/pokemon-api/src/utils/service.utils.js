import { Constants } from "../configs/constants.js";

export class ServiceUtils {
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