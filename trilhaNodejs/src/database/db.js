const customers = [
  {
    name: 'Jesus',
    cpf: '99988877745',
    id: '0ed2d770-8220-4d41-988e-849608d279ce',
    statement: [],
  },
  {
    name: 'Jose',
    cpf: '33388866612',
    id: '87e5b4e3-24b3-439e-b862-09917fc10abf',
  },
  {
    name: 'Nicolas',
    cpf: '68622178013',
    id: '8b4ca7aa-8b98-4054-b0aa-1e20ef45e817',
    statement: [
      {
        type: 'CREDIT',
        amount: 3000,
        description: 'transferencia',
        created_at: '10/10/2021 09:22:00',
        old_balance: 0,
        current_balance: 3000,
      },
      {
        type: 'CREDIT',
        amount: 1000,
        description: 'transferencia',
        created_at: '11/10/2021 10:28:00',
        old_balance: 3000,
        current_balance: 4000,
      },
      {
        type: 'DEBIT',
        amount: 1700,
        created_at: '11/10/2021 10:41:00',
        old_balance: 4000,
        current_balance: 2300,
      },
    ],
  },
  {
    name: 'Fluce',
    cpf: '40200944037',
    id: 'ebfdc22b-b62e-46a5-9dae-26b2e0406417',
    statement: [],
  },
  {
    name: 'Pigil',
    cpf: '62126656055',
    id: '40e6b4f4-c752-419c-bdda-86c694a2f5b1',
    statement: [],
  },
  {
    name: 'Vyazu',
    cpf: '78878845000',
    id: '3cc15f4d-3cf1-4086-921d-40c270a34826',
    statement: [],
  },
  {
    name: 'Duiko',
    cpf: '92721075047',
    id: '5ab74c34-43a4-4a4f-8455-3a7fc6ce22b0',
    statement: [],
  },
  {
    name: 'Naruypes',
    cpf: '20622661035',
    id: '6c56ed1e-7f25-4445-8f51-b857a7a1da06',
    statement: [],
  },
  {
    name: 'Luwal',
    cpf: '25424865062',
    id: '245e7178-e806-4cbb-b995-6c008d5a3c46',
    statement: [],
  },
  {
    name: 'Roudao',
    cpf: '90703237020',
    id: '1c082986-5ecc-4e7d-9122-1b1564fc4640',
    statement: [],
  },
  {
    name: 'Heuti',
    cpf: '86214948094',
    id: 'f736b0dd-7a87-4603-a629-bfba3c8933b7',
    statement: [],
  },
  {
    name: 'Hoibu',
    cpf: '64834544060',
    id: 'e7b51e30-909b-4dca-a124-5c9a6838b00d',
    statement: [],
  },
  {
    name: 'Dialgi',
    cpf: '75899997095',
    id: '79839dd2-376e-46d4-9fa3-885937e82f4d',
  },
];

export default customers;
