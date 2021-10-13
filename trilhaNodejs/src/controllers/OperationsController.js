// Global function to get balance from a account
function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'credit') {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0);
  return balance;
}

export default {
  // Deposit ammount
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

  // Withraw ammount
  withdraw(req, res) {
    const { customer } = req;
    const { amount } = req.body;

    const balance = getBalance(customer.statement);
    console.log(balance);
  },
};
