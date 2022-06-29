import { readFile } from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { constants } from './constants.js';
import { User } from './user.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_OPTION = {
	maxLines: 3,
	fields: ['id', 'name', 'profession', 'age'],
};

export class File {
	static async csvToJson(filePath) {
		const content = await File.getFileContent(filePath);
		const validateContent = File.isValid(content);
		if (!validateContent.valid) throw new Error(validateContent.error);
		const users = File.parseCSVToJson(content);
		return users;
	}

	static async getFileContent(filePath) {
		// const filename = path.join(__dirname, filePath);
		// const fileContent = await readFile(filename);
		// return fileContent.toString('utf-8');
		return (await readFile(filePath)).toString('utf8');
	}

	static isValid(csvString, options = DEFAULT_OPTION) {
		const stringContent = csvString.split('\n');
		let [header, ...fileWithoutHeaders] = stringContent;
		const validateHeader = header === options.fields.join(',');
		if (!validateHeader) {
			return {
				error: constants.error.FILE_FIELDS_ERROR_MSG,
				valid: false,
			};
		}

		const validateContentLength = fileWithoutHeaders.length > 0 && fileWithoutHeaders.length <= options.maxLines;
		if (!validateContentLength) { 
			return {
				error: constants.error.FILE_LENGTH_ERROR_MSG,
				valid: false,
			};
		}

		return { valid: true }
	}

	static parseCSVToJson(csvString) {
		const lines = csvString.split('\n');
		const firstLine = lines.shift();
		const header = firstLine.split(',');
		const users = lines.map((line) => {
			const columns = line.split(',');
			let user = {};
			for (const i in columns) {
				user[header[i]] = columns[i];
			}
			return new User(user);
		})
		return users
	}
}

// (async () => {
// 	const result = await File.csvToJson('./../mocks/threeItens-valid.csv');
// 	// const result = await File.csvToJson('./../mocks/invalid-header.csv');
// 	// const result = await File.csvToJson('./../mocks/fourItens-invalid.csv');
// 	console.log(`Result:\n${result}`);
// })();
