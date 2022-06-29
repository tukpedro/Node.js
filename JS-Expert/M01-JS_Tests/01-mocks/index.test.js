import { File } from './src/file.js';
import { constants } from './src/constants.js';
import { rejects } from 'assert';

(async () => {
	{
		const filePath = 'C:/projects/Node.js/JS-Expert/M01-JS_Tests/01-mocks/mocks/invalid-header.csv';
		const rejection = new Error(constants.error.FILE_FIELDS_ERROR_MSG);
		const result = File.csvToJson(filePath);
		await rejects(result, rejection);
	}
	{
		const filePath = 'C:/projects/Node.js/JS-Expert/M01-JS_Tests/01-mocks/mocks/fourItems-invalid.csv';
		const rejection = new Error(constants.error.FILE_LENGTH_ERROR_MSG);
		const result = File.csvToJson(filePath);
		await rejects(result, rejection);
	}
	{
		const filePath = 'C:/projects/Node.js/JS-Expert/M01-JS_Tests/01-mocks/mocks/threeItems-valid.csv';
		const result = await File.csvToJson(filePath);
		const expected = [
			{
				name: 'Erick Wendel',
				id: 123,
				profession: 'Javascript Instructor',
				age: 27,
				birthDay: 1995,
			},
			{
				name: 'Pedro Pastuk',
				id: 321,
				profession: 'Javascript Specialist',
				age: 34,
				birthDay: 1988,
			},
			{
				name: 'Joaozinho',
				id: 231,
				profession: 'Java Developer',
				age: 30,
				birthDay: 1992,
			},
		];

		JSON.stringify(result) === JSON.stringify(expected) ? console.log('SUCCESS') : console.log('FAIL');
	}
})();
