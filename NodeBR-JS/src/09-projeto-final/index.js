import { MainScreen } from './src/screen.js';
import { Utils } from './src/utils.js';
import { Game } from './src/game.js';

function onLoad() {
	// const card = {
	// 	img: './files/default.png',
	// 	name: 'default',
	// };
	// const html = MainScreen.getHtmlCode(card);
	// MainScreen.modifyHtmlContent(html.concat(html));
	// MainScreen.updateImg([card, card, card, card]);

	const dependencies = {
		mainScreen: MainScreen,
		utils: Utils,
	};

	const game = new Game(dependencies);

	game.initialize();
}
window.onload = onLoad();
