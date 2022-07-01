export class Constants {
	constructor() {
		this.cluster0 = {
			username: 'pedropastuk',
			password: 'J764Cj',
		};
		
		this.clusterUri = `mongodb+srv://${this.cluster0.username}:${this.cluster0.password}@cluster0.ztkcz.mongodb.net/?retryWrites=true&w=majority`;
		
		this.pokeApi = {
			url: 'https://pokeapi.co/api/v2/',
			pokemons: 'pokemon/',
			characteristic: 'characteristic/',
			evolutionChain: 'evolution-chain/',
			type: 'type/',
			pokemonSpecies: 'pokemon-species',
			offset: '?offset=0&limit=100000',
		};
	}
}