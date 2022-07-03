import { Constants } from '../configs/constants.js';
import { Pokemon } from '../models/Pokemon.js';

export class Controller {
	static async get(req, res) {
		const data = Controller.dataProvider(req)
		let arr = [];
		try {
			let { results } = await Controller.fetchUrl(data.pokemonsUrl);
			
			let found = results.find((e) => e.name === data.pokemon);
			if (!found) return res.status(404).json({ error: `Could not find pokemon ${data.pokemon}` });
			
			let pokemonData = await Controller.fetchUrl(found.url);
			arr.push(pokemonData);
			
			pokemonData = await Controller.fetchUrl(arr[0].species.url);
			arr.push(pokemonData);
			
			pokemonData = await Controller.fetchUrl(arr[1].evolution_chain.url);
			arr.push(pokemonData);
			
			return res.status(200).send(new Pokemon(arr[0], arr[1], arr[2]));
		} catch (error) {
			throw new Error(error);
		}
	}


	static dataProvider(req) {
		const { pokeApi } = new Constants();
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

	// static async promiseExecutor(...promises) {
	// 	return await Promise.all([promises])
	// }
}
