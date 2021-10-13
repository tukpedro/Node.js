import customers from '../database/db.js';

export default {
  // Routes logger
  logRoutes(req, res, next) {
    console.log(`${req.method} -> ${req.url}`);
    return next();
  },

  // Verify if CPF exists
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
};
