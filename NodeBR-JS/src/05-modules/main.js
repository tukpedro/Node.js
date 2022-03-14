import readLine from 'readline';
import { MathCustom } from './01/demo05.js';

const terminal = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
});

terminal.question('Valor 1: ', (valor1) => {
	valor1 = validate(valor1);
	terminal.question('Valor 2: ', (valor2) => {
		valor2 = validate(valor2);
		terminal.question('Operação: ', (option) => {
			option = validate(option);
			switch (option) {
				case 1:
					console.log(`${valor1} + ${valor2} = ${MathCustom.sum(valor1, valor2)}`);
					terminal.close();
					break;
				case 2:
					console.log(`${valor1} x ${valor2} = ${MathCustom.multiply(valor1, valor2)}`);
					terminal.close();
					break;
				case 3:
					console.log(`${valor1} - ${valor2} = ${MathCustom.subtract(valor1, valor2)}`);
					terminal.close();
					break;
				case 4:
					console.log(`${valor1} / ${valor2} = ${MathCustom.divide(valor1, valor2)}`);
					terminal.close();
					break;
				default:
					console.log(`Opção inválida`);
					terminal.close();
					break;
			}
		});
	});
});

function validate(value) {
	let check = isNaN(value);
	if (check) throw new Error('Digite apenas números');
	return Number(value);
}
