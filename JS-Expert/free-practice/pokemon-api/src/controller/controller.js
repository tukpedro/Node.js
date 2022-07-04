import { Service } from '../service/service.js';

export class Controller {
	static async get(req, res) {
		try {
			return res.status(200).send(await Service.service(req));
		} catch (error) {
			return res.status(404).send({ error: error.toString() });
		}
	}
}
