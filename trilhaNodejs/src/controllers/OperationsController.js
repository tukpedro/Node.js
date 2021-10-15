// Global function to get balance from a account
function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'CREDIT') {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0);
  return balance;
}

// Functions to export
export default {
  // Deposit ammount
  deposit(req, res) {
    const { customer } = req;
    const { description, amount } = req.body;

    const balance = getBalance(customer.statement);

    const operation = {
      type: 'CREDIT',
      amount,
      description,
      created_at: new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
      }),
    };

    operation.old_balance = balance;

    operation.current_balance = balance + amount;

    customer.statement.push(operation);

    return res.status(201).json(customer);
  },

  // Withraw ammount
  withdraw(req, res) {
    const { customer } = req;
    const { amount } = req.body;

    const balance = getBalance(customer.statement);

    if (balance < amount) {
      return res.status(400).json({
        message: 'Insuficient funds!',
      });
    }

    const operation = {
      type: 'DEBIT',
      amount,
      created_at: new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
      }),
    };

    operation.old_balance = balance;

    operation.current_balance = balance - amount;

    customer.statement.push(operation);

    return res.status(201).json(customer)
  },
};
