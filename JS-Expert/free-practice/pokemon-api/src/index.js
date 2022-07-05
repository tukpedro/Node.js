import express, { json } from 'express';
import { Constants } from './configs/constants.js';
import router from './routes/routes.js';

const app = express();

app.use(json());

app.use(router);

app.listen(Constants.port, () => {
	console.log(`✨ Listening on port ${Constants.port} 😎`);
});
