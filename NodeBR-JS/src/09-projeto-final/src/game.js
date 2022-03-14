export class Game {
	constructor({ mainScreen }) {
		this.mainScreen = mainScreen;

		this.initialHeros = [
			{ img: './files/flash.png', name: 'flash' },
			{ img: './files/batman.png', name: 'batman' },
			{ img: './files/spiderman.png', name: 'spiderman' },
			{ img: './files/cyclops.png', name: 'cyclops' },
			{ img: './files/antman.png', name: 'antman' },
			{ img: './files/deadpool.png', name: 'deadpool' },
			{ img: './files/hellboy.png', name: 'hellboy' },
			{ img: './files/thor.png', name: 'thor' },
			{ img: './files/wolverine.png', name: 'wolverine' },
			{ img: './files/thief.png', name: 'thief' },
		];

		this.defaultIcon = './files/default.png';

		this.hiddenHeros = [];
	}

	initialize() {
		this.mainScreen.updateImg(this.initialHeros);
		this.mainScreen.playButtonConfig(this.play.bind(this));
	}

	randomize() {
		const herosCopy = this.initialHeros
			.concat(this.initialHeros)
			.map((hero) => {
				return Object.assign({}, hero, { id: Math.random() / 0.5 });
			})
			.sort(() => Math.random() - 0.5);

		this.mainScreen.updateImg(herosCopy);
		this.mainScreen.checkCardsButtonConfig(this.checkSelection.bind(this));

		this.hideHeros(herosCopy);
	}

	hideHeros(heros) {
		const hiddenHeros = heros.map(({ name, id }) => ({
			id,
			name,
			img: this.defaultIcon,
		}));

		this.mainScreen.updateImg(hiddenHeros);

		this.hiddenHeros = hiddenHeros;
	}

	checkSelection(id, name) {
		const item = { id, name };
		alert(`Olá ${item.name}!`);
	}

	play() {
		this.randomize();
	}
}
