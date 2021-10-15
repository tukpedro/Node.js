import { v4 as uuidv4 } from 'uuid';
import customers from '../database/db.js';

export default {
  // Create account
  create(req, res) {
    const { cpf, name } = req.body;

    const cpfExists = customers.some(customer => customer.cpf === cpf);

    while (cpfExists) {
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

    return res.status(201).json(customer);
  },

  // List all clients and statements
  getClients(req, res) {
    const customersData = [];

    customers.forEach(customer => {
      const data = {
        name: customer.name,
        cpf: customer.cpf,
        id: customer.id,
      };

      customersData.push(data);
    });

    return res.json(customersData);
  },

  // List all statements from a client
  getStatement(req, res) {
    const { customer } = req;
    return res.json(customer.statement);
  },

  getStatementByDate(req, res) {
    const { customer } = req;
    const { date } = req.headers;

    const dateFormat = new Date(date + ' 00:00').toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    });

    const statement = customer.statement.filter(
      statement =>
        statement.created_at ===
        new Date(dateFormat).toLocaleString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
        }),
    );

    console.log(statement);

    // if (!statement) {
    //   return res.status(400).json({
    //     error: 'Not Found!',
    //   });
    // }

    return res.status(200).json(statement);
  },
};
