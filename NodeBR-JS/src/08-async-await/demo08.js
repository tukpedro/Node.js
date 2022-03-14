import readLine from 'readline';

const terminal = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function questionAsync(text) {
	return new Promise((resolve, reject) => {
		terminal.question(`${text}\n`, (msg) => {
			Boolean(msg) ? resolve(msg) : reject(new Error('Empty field error'));
		});
	});
}

async function main() {
	try {
		const nome = await questionAsync('Qual seu nome?');
		const telefone = await questionAsync('Qual seu telefone?');
		console.log(`Nome: ${nome}\nTelefone: ${telefone}`);
	} catch (err) {
		console.log(err);
	} finally {
		terminal.close();
	}
}

main();
