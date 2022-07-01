import express, { json } from 'express';
import router from './routes/routes.js';

const app = express();

app.use(json());

app.use(router);

app.listen(2020, () => {
	console.log('✨ Listening on port 2020 😎');
});
