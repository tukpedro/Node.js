const ID_CONTENT = 'content';
const ID_PLAY_BUTTON = 'play-button';
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
}
