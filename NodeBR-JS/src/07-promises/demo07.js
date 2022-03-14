import readLine from 'readline';

const terminal = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// terminal.question('Qual seu nome? ', (nome) => {
// 	terminal.question('Qual seu telefone? ', (telefone) => {
// 		console.log(
// 			`
//         Nome: ${nome},
//         Telefone: ${telefone}
//         `,
//         );
//         terminal.close();
// 	});
// });

function questionAsync(text) {
	return new Promise((resolve, reject) => {
		terminal.question(`${text}\n`, resolve);
	});
}

let name = '';
let phone = '';

Promise.resolve()
	.then(() => questionAsync('Qual seu nome?'))
    .then((nameResponse) => {
        if (!nameResponse) throw new Error('Empty field')
		name = nameResponse;
	})
	.then(() => questionAsync('Qual seu telefone?'))
    .then((phoneResponse) => {
        if (!phoneResponse) throw new Error('Empty field');
		phone = phoneResponse;
	})
    .then(() => console.log(`Nome: ${name}\nTelefone: ${phone}`))
    .catch(err => console.error(err))
    .finally(() => terminal.close());
