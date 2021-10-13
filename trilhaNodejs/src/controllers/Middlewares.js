import customers from '../database/db.js';

export default {
  // Routes logger
  logRoutes(req, res, next) {
    console.log(`${req.method} -> ${req.url}`);
    return next();
  },

  // Verify if CPF is correctly formatted
  cpfFormat(req, res, next) {
    const { cpf } = req.body;

    while (isNaN(cpf) === true) {
      return res.status(400).json({
        error: 'CPF must be only numbers!',
      });
    }

    while (typeof cpf !== 'string') {
      return res.status(400).json({
        error: 'CPF must be on string format!',
      });
    }

    while (cpf.length !== 11) {
      return res.status(400).json({
        error: 'CPF must have 11 numbers!',
      });
    }

    return next();
  },

  // Verify if CPF exists
  cpfExists(req, res, next) {
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
};
