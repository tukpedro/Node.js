import { Utils } from './utils.js';

const ID_CONTENT = 'content';
const ID_PLAY_BUTTON = 'play-button';
const ID_MSG = 'msg';
const INVISIBLE_CLASS = 'invisible';
const ID_LOADING = 'loading';
const ID_COUNTER = 'counter';
const ID_SHOW_CARDS_BUTTON = 'show-cards';

const MSGS = {
	success: {
		txt: 'Correto!',
		msgClass: 'alert-success',
	},
	failure: {
		txt: 'Errado! Tente novamente!',
		msgClass: 'alert-danger',
	},
};

export class MainScreen {
	static getHtmlCode(item) {
		return `
        <div class="col-md-3">
			<div class="card" style="width: 18rem" onclick="window.checkSelection('${item.id}', '${item.name}')">
				<img src="${item.img}" name="${item.name}" class="card-img-top" />
			</div>
            <br />
		</div>
        `;
	}

	static checkCardsButtonConfig(onClick) {
		window.checkSelection = onClick;
	}

	static modifyHtmlContent(htmlCode) {
		const content = document.getElementById(ID_CONTENT);
		content.innerHTML = htmlCode;
	}

	static generateStringThroughImg(itens) {
		return itens.map((item) => MainScreen.getHtmlCode(item)).join('');
	}

	static updateImg(itens) {
		const htmlCode = MainScreen.generateStringThroughImg(itens);
		MainScreen.modifyHtmlContent(htmlCode);
	}

	static playButtonConfig(onClick) {
		const button = document.getElementById(ID_PLAY_BUTTON);
		button.onclick = onClick;
	}

	static showHeros(herosName, herosImg) {
		const htmlElements = document.getElementsByName(herosName);

		htmlElements.forEach((item) => (item.src = herosImg));
	}

	static async showMsg(success = true) {
		const element = document.getElementById(ID_MSG);
		if (success) {
			element.classList.remove(MSGS.failure.msgClass);
			element.classList.add(MSGS.success.msgClass);
			element.innerText = MSGS.success.txt;
		} else {
			element.classList.remove(MSGS.success.msgClass);
			element.classList.add(MSGS.failure.msgClass);
			element.innerText = MSGS.failure.txt;
		}
		element.classList.remove(INVISIBLE_CLASS);
		await Utils.timeout(2000);
		element.classList.add(INVISIBLE_CLASS);
	}

	static showLoading(show = true) {
		const loading = document.getElementById(ID_LOADING);
		if (show) {
			loading.classList.remove(INVISIBLE_CLASS);
			return;
		}
		loading.classList.add(INVISIBLE_CLASS);
	}

	static async countDown() {
		const counter = document.getElementById(ID_COUNTER);
		let sec = 3;

		while (sec >= 1) {
			counter.innerHTML = `<strong>Starting in ${sec}...</strong>`;
			await Utils.timeout(1000);
			sec--;
		}
	}

	static showCardsButtonConfig(onClick) {
		const showCardsButton = document.getElementById(ID_SHOW_CARDS_BUTTON);
		showCardsButton.onclick = onClick
	}
}
