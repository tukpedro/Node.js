import { Service } from '../service/service.js';
import { ErrorMessages } from '../utils/error.messages.js';
export class Controller {
	static async get(req, res) {
		try {
			Service.success = true;
			return res.status(200).send(await Service.service(req));
		} catch (error) {
			if (error === ErrorMessages.pokemonNotFound) return res.status(404).send({ error: 'Bad Request', message: error });
			return res.status(500).send({ error: 'Service error', message: error.message });
		}
	}
}
