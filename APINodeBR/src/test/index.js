import fs from 'fs';
import path from 'path';

const folderName = 'uiui23';

fs.mkdir(path.join(__dirname, folderName), (err) => {
	if (err) {
		return console.error(err);
	}
	console.log('Directory created successfully!');
});
