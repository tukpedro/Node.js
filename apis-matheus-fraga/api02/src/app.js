import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';

class App {
	constructor() {
		this.server = express();

		mongoose.connect('mongodb+srv://pedro:db1234@api02db.ztkcz.mongodb.net/api02db?retryWrites=true&w=majority', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(express.json());
	}

	routes() {
		this.server.use(routes);
	}
}

export default new App().server;