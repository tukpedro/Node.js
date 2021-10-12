import { v4 as uuidv4 } from 'uuid';
import customers from '../database/db.js';

export default {
  logRoutes(req, res, next) {
    console.log(`${req.method} -> ${req.url}`);
    return next();
  },

  verifyCpf(req, res, next) {
    const { cpf } = req.headers;

    const customer = customers.find(customer => customer.cpf === cpf);

    if (!customer) {
      return res.status(400).json({
        error: 'CPF not found',
      });
    }

    req.customer = customer;

    return next();
  },

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

  getClients(req, res) {
    return res.json(customers);
  },

  getStatement(req, res) {
    const { customer } = req;
    return res.json(customer.statement);
  },

  deposit(req, res) {
    const { customer } = req;
    const { description, amount } = req.body;

    const operation = {
      description,
      amount,
      created_at: new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
      }),
      type: 'credit',
    };

    customer.statement.push(operation);

    return res.status(201).json(customer);
  },
};
