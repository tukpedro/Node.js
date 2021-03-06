export class Game {
	constructor({ mainScreen, utils }) {
		this.mainScreen = mainScreen;
		this.utils = utils;

		this.initialHeros = [
			{ img: './files/flash.png', name: 'flash' },
			{ img: './files/batman.png', name: 'batman' },
			{ img: './files/spiderman.png', name: 'spiderman' },
			{ img: './files/cyclops.png', name: 'cyclops' },
			// { img: './files/antman.png', name: 'antman' },
			// { img: './files/deadpool.png', name: 'deadpool' },
			// { img: './files/hellboy.png', name: 'hellboy' },
			// { img: './files/thor.png', name: 'thor' },
			// { img: './files/wolverine.png', name: 'wolverine' },
			// { img: './files/thief.png', name: 'thief' },
		];

		this.defaultIcon = './files/default.png';

		this.hiddenHeros = [];

		this.selectedHeros = [];
	}

	initialize() {
		this.mainScreen.updateImg(this.initialHeros);
		this.mainScreen.playButtonConfig(this.play.bind(this));
		this.mainScreen.checkCardsButtonConfig(this.checkSelection.bind(this));
		this.mainScreen.showCardsButtonConfig(this.showCards.bind(this));
	}

	async randomize() {
		const herosCopy = this.initialHeros
			.concat(this.initialHeros)
			.map((hero) => {
				return Object.assign({}, hero, { id: Math.random() / 0.5 });
			})
			.sort(() => Math.random() - 0.5);

		this.mainScreen.updateImg(herosCopy);
		this.mainScreen.showLoading();

		await this.mainScreen.countDown();
		this.mainScreen.showLoading(false);
		this.hideHeros(herosCopy);
	}

	hideHeros(heros) {
		const newHiddenHeros = heros.map(({ name, id }) => ({
			id,
			name,
			img: this.defaultIcon,
		}));

		this.mainScreen.updateImg(newHiddenHeros);

		this.hiddenHeros = newHiddenHeros;
	}

	showHeros(herosName) {
		const { img } = this.initialHeros.find((hero) => hero.name === herosName);

		this.mainScreen.showHeros(herosName, img);
	}

	showCards() {
		const hiddenHeros = this.hiddenHeros;
		hiddenHeros.forEach((hero) => {
			const { img } = this.initialHeros.find((item) => item.name === hero.name);
			hero.img = img;
		});
		this.mainScreen.updateImg(hiddenHeros);
	}

	checkSelection(id, name) {
		const item = { id, name };
		// alert(`Ol?? ${item.name}!\nID: ${item.id}`);

		const newSelectedHeros = this.selectedHeros.length;

		switch (newSelectedHeros) {
			case 0:
				this.selectedHeros.push(item);
				break;

			case 1:
				const [option1] = this.selectedHeros;
				this.selectedHeros = [];

				if (option1.name === item.name && option1.id != item.id) {
					this.showHeros(item.name);
					this.mainScreen.showMsg();
					return;
				}

				this.mainScreen.showMsg(false);
				break;
		}
	}

	play() {
		this.randomize();
	}
}
