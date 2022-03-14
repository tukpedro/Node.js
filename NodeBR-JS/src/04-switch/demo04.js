import readLine from 'readline';

const terminal = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const textMenu = `
Olá, seja bem vindo ao sistema CPTUK!
Digite 1 para acessar o menu inicial
Digite 2 para menu de Heróis
Digite 3 para menu de Armas
Digite 4 para menu de Escudos
Digite 0 para sair
`;

// terminal.question('Qual o seu nome? ', (response) => {
// 	console.log('Resposta:', response);
// 	terminal.close();
// });

const questions = {
	menuInicial: {
		text: textMenu,
		fn: menu,
	},
	op1: {
		text: `
		---------------
		|1 * HERÓIS * |
		---------------
		--------------
		|2 * ARMAS * |
		--------------
		----------------
		|3 * ESCUDOS * |
		----------------
		-------------
		|0 * SAIR * |
		-------------
		`,
		fn: op1,
	},
	op2: {
		text: `
		---------------
		|1 * BATMAN * |
		---------------
		--------------
		|2 * FLASH * |
		--------------
		-----------------
		|3 * SUPERMAN * |
		-----------------
		-----------------------
		|4 * MENU PRINCIPAL * |
		-----------------------
		`,
		fn: op2,
	},
	op3: {
		text: `
		-------------
		|1 * FACA * |
		-------------
		-----------------------
		|2 * BARRA DE FERRO * |
		-----------------------
		-------------------------
		|3 * GAS LACRIMOGENIO * |
		-------------------------
		-----------------------
		|4 * MENU PRINCIPAL * |
		-----------------------
		`,
		fn: op3,
	},
	op4: {
		text: `
		---------------
		|1 * ESCUDO * |
		---------------
		----------------
		|2 * ESQUIVA * |
		----------------
		----------------------
		|3 * CONTRA-ATAQUE * |
		----------------------
		-----------------------
		|4 * MENU PRINCIPAL * |
		-----------------------
		`,
		fn: op4,
	},
};

function menu(option) {
	if (isNaN(option)) throw new Error('Digite apenas números!');
	const menu = Number(option);
	switch (menu) {
		case 0:
			console.log('Saindo...');
			terminal.close();
			break;
		case 1:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}BEM VINDO AO MENU INICIAL!`);
			terminal.question(questions.op1.text, questions.op1.fn);
			break;
		case 2:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}BEM VINDO AO MENU DE HERÓIS!`);
			terminal.question(questions.op2.text, questions.op2.fn);
			break;
		case 3:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}BEM VINDO AO MENU DE ATAQUE!`);
			terminal.question(questions.op3.text, questions.op3.fn);
			break;
		case 4:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}BEM VINDO AO MENU DE DEFESA!`);
			terminal.question(questions.op4.text, questions.op4.fn);
			break;
		default:
			console.log(`OPÇÃO INVÁLIDA!`);
			terminal.question('', questions.menuInicial.fn);
			break;
	}
}

function op1(option) {
	let check = isNaN(option);
	while (check) {
		console.log(`${'\n'.repeat(2)}${' '.repeat(15)}DIGITE APENAS NÚMEROS!`);
		terminal.question(questions.op1.text, questions.op1.fn);
		check = false;
	}
	const hero = Number(option);
	switch (hero) {
		case 1:
			terminal.question(questions.op2.text, questions.op2.fn);
			break;
		case 2:
			terminal.question(questions.op3.text, questions.op3.fn);
			break;
		case 3:
			terminal.question(questions.op4.text, questions.op4.fn);
			break;
		case 0:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}SAINDO...`);
			terminal.close();
			break;
		default:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}OPÇÃO INVÁLIDA!`);
			terminal.question('', questions.op1.fn);
			break;
	}
}

function op2(option) {
	let check = isNaN(option);
	while (check) {
		console.log(`${'\n'.repeat(2)}${' '.repeat(15)}DIGITE APENAS NÚMEROS!`);
		terminal.question(questions.op2.text, questions.op2.fn);
		check = false;
	}
	const hero = Number(option);
	switch (hero) {
		case 1:
			console.log('Olá, Mr. Wayne!');
			terminal.close();
			break;
		case 2:
			console.log('Olá, Mr. Allen!');
			terminal.close();
			break;
		case 3:
			console.log('Olá, Mr. Kent!');
			terminal.close();
			break;
		case 4:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}VOLTANDO...`);
			terminal.question(questions.op1.text, questions.op1.fn);
			break;
		default:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}OPÇÃO INVÁLIDA!`);
			terminal.question('', questions.op2.fn);
			break;
	}
}

function op3(option) {
	let check = isNaN(option);
	while (check) {
		console.log(`${'\n'.repeat(2)}${' '.repeat(15)}DIGITE APENAS NÚMEROS!`);
		terminal.question(questions.op3.text, questions.op3.fn);
		check = false;
	}
	const hero = Number(option);
	switch (hero) {
		case 1:
			console.log('FACADAAAA!');
			terminal.close();
			break;
		case 2:
			console.log('PORRADA NO KENGOOOO!');
			terminal.close();
			break;
		case 3:
			console.log('TOMA NOZÓIO FDPUTAAA!');
			terminal.close();
			break;
		case 4:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}VOLTANDO...`);
			terminal.question(questions.op1.text, questions.op1.fn);
			break;
		default:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}OPÇÃO INVÁLIDA!`);
			terminal.question('', questions.op3.fn);
			break;
	}
}

function op4(option) {
	let check = isNaN(option);
	while (check) {
		console.log(`${'\n'.repeat(2)}${' '.repeat(15)}DIGITE APENAS NÚMEROS!`);
		terminal.question(questions.op4.text, questions.op4.fn);
		check = false;
	}
	const hero = Number(option);
	switch (hero) {
		case 1:
			console.log('SEGUROU NO BRAÇOOO!');
			terminal.close();
			break;
		case 2:
			console.log('ERRRRROOOU!!!');
			terminal.close();
			break;
		case 3:
			console.log('SMELL IT, NOW TAKE IT!!');
			terminal.close();
			break;
		case 4:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}VOLTANDO...`);
			terminal.question(questions.op1.text, questions.op1.fn);
			break;
		default:
			console.log(`${'\n'.repeat(2)}${' '.repeat(15)}OPÇÃO INVÁLIDA!`);
			terminal.question('', questions.op4.fn);
			break;
	}
}

terminal.question(questions.menuInicial.text, questions.menuInicial.fn);
