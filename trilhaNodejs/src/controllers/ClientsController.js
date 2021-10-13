import { v4 as uuidv4 } from 'uuid';
import customers from '../database/db.js';

export default {
  // Create account
  create(req, res) {
    const { cpf, name } = req.body;

    const cpfExists = customers.some(customer => customer.cpf === cpf);

    if (cpfExists) {
      return res.status(400).json({
        error: 'CPF already exists',
      });
    }

    const id = uuidv4();

    const customer = {
      cpf,
      name,
      id,
      statement: [],
    };

    customers.push(customer);

    return res.status(201).json(customers);
  },

  // List all clients and statements
  getClients(req, res) {
    return res.json(customers);
  },

  // List all statements from a client
  getStatement(req, res) {
    const { customer } = req;
    return res.json(customer.statement);
  },
};
