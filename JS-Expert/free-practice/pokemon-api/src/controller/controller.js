import { Service } from '../service/service.js';
import { ErrorMessages } from '../utils/error.messages.js';
export class Controller {
	static async getPokemon(req, res) {
		try {
			return res.status(200).send(await Service.service(req));
		} catch (error) {
			const flag = error === ErrorMessages.pokemonNotFound;
			if (flag) return res.status(404).send({ error: 'Bad Request', message: error });
			return res.status(500).send({ error: 'Service error', message: error.message });
		}
	}
}
