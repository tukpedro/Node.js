import fs from 'fs';

const path = 'C:/projects/Node.js/NodeBR-JS/src/06-callbacks';

// fs.readFile(path, (err, response) => {
//     if (err) {
//         console.error(err.stack);
//         return;
//     }
//     console.log(response.toString());
// })

fs.readFile(`${path}/1.txt`, (err1, response1) => {
	if (err1) {
		console.error('ERRO:', err1);
		return;
	}

	fs.readFile(`${path}/2.txt`, (err2, response2) => {
		if (err2) {
			console.error('ERRO:', err2);
			return;
		}

		fs.readFile(`${path}/3.txt`, (err3, response3) => {
			if (err3) {
				console.error('ERRO:', err3);
				return;
            }
            const text = `${response1}\n${response2}\n${response3}\n`;
            
            fs.writeFile(`${path}/final.txt`, text, (errFinal, respFinal) => {
                if (errFinal) {
                    console.log(errFinal);
                    return;
                }
                console.log('Gerado novo arquivo!')
            });
		});
	});
});
