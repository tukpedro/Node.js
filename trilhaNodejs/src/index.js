import express, { json } from 'express';
import router from './routes.js';

const app = express();

app.use(json());

app.use(router);

app.listen(3000, () => {
  console.log('✨ Listening on port 3000 😎');
});
