export class Constants {
	static cluster0 = {
		username: 'pedropastuk',
		password: 'J764Cj',
	};

	static clusterUri = `mongodb+srv://${this.cluster0.username}:${this.cluster0.password}@cluster0.ztkcz.mongodb.net/?retryWrites=true&w=majority`;

	static pokeApi = {
		url: 'https://pokeapi.co/api/v2/',
		pokemons: 'pokemon/',
		characteristic: 'characteristic/',
		evolutionChain: 'evolution-chain/',
		type: 'type/',
		pokemonSpecies: 'pokemon-species',
		offset: '?offset=0&limit=100000',
	};
}
