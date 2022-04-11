const ID_CONTENT = 'content';
const ID_PLAY_BUTTON = 'play-button';
const ID_MSG = 'msg';
const INVISIBLE_CLASS = 'invisible';
const MSGS = {
	success: {
		txt: 'Correto!',
		class: 'alert-success'
	},
	failure: {
		txt: 'Errado! Tente novamente!',
		class: 'alert-danger'
	}
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
		return itens.map(MainScreen.getHtmlCode).join('');
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

	static showMsg(success = true) {
		const element = document.getElementById(ID_MSG)
		if (success) {
			element.classList.remove(MSGS.failure.class);
			element.classList.add(MSGS.success.class);
			element.innerText = MSGS.success.txt
		}
		else {
			element.classList.remove(MSGS.success.class);
			element.classList.add(MSGS.failure.class);
			element.innerText = MSGS.failure.txt;
		}
		element.classList.remove(INVISIBLE_CLASS);
		setTimeout(() => {
			element.classList.add(INVISIBLE_CLASS);
		}, 2000)
		
	}
}
