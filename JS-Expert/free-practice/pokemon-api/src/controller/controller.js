import { Constants } from '../configs/constants.js';
import { Pokemon } from '../models/Pokemon.js';

export class Controller {
	static async get(req, res) {
		const data = Controller.dataProvider(req)
		let objects = {};
		try {
			let { results } = await Controller.fetchUrl(data.pokemonsUrl);
			
			let found = results.find((e) => e.name === data.pokemon);
			if (!found) return res.status(404).json({ error: `Could not find pokemon ${data.pokemon}` });
			
			let pokemonData = await Controller.fetchUrl(found.url);
			objects.pokemon = pokemonData;
			
			pokemonData = await Controller.fetchUrl(objects.pokemon.species.url);
			objects.species = pokemonData;

			pokemonData = await Controller.fetchUrl(objects.species.evolution_chain.url);
			objects.evolution = pokemonData;
			
			return res.status(200).send(new Pokemon(objects.pokemon, objects.species));
		} catch (error) {
			throw new Error(error);
		}
	}


	static dataProvider(req) {
		const { pokeApi } = new Constants();
		let pokemon = req.params.pokemon;
		pokemon = isNaN(parseInt(pokemon, 10)) ? pokemon : parseInt(pokemon, 10);
		let pokemonsUrl = pokeApi.url + pokeApi.pokemons + pokeApi.offset;
		let pokemonSpecies = pokeApi.url + pokeApi.pokemonSpecies + pokeApi.offset;
		let evolutionUrl = pokeApi.url + pokeApi.evolutionChain + pokeApi.offset;
		

		return { pokeApi, pokemon, pokemonsUrl, pokemonSpecies, evolutionUrl };
	}

	static async fetchUrl(param) {
		const res = await fetch(param);
		return await res.json();
	}

	// static async promiseExecutor(...promises) {
	// 	return await Promise.all([promises])
	// }
}
