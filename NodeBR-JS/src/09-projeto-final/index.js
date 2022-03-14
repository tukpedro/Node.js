import { MainScreen } from './src/screen.js';
import { Game } from './src/game.js';

function onLoad() {
	// const card = {
	// 	img: './files/default.png',
	// 	name: 'default',
	// };
	// const html = MainScreen.getHtmlCode(hero);
	// MainScreen.modifyHtmlContent(html.concat(html));
	// MainScreen.updateImg([card, card, card, card]);

	const dependencies = {
		mainScreen: MainScreen,
	};

	const game = new Game(dependencies);

	game.initialize();
}
window.onload = onLoad();
