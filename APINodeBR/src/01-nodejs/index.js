/*
1 obter usuario
2 obter numero telefone a partir do id do usuario
3 obter endereço pelo id do usuario
*/
function obterUser() {
  // qdo der problema -> reject
  // dqo success -> resolve
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject(new Error('DEU RUIM P KRL'))
      console.log("1s - OBTER USER");
      return resolve({
        id: 1,
        nome: "Pedro",
        dataNasc: new Date(1988, 8, 20),
      });
    }, 2000);
  });
}

function obterPhone(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("2s - OBTER TELEFONE");
      return resolve({
        telefone: "99169-9142",
        ddd: '41',
      });
    }, 2000);
  });
}

function obterAdress(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("3s - OBTER ENDEREÇO");
      return resolve({
        rua: "Baltazar Carrasco dos Reis",
        num: "2005",
      });
    }, 2000);
  });
}


const main = async () => {
  try {
    const user = await obterUser();
    const result = await Promise.all([
      obterPhone(user.id),
      obterAdress(user.id),
    ])
    
    console.log(`
    User: ${user.nome},
    Phone: (${result[0].ddd})${result[0].telefone},
    Adress: ${result[1].rua}, ${result[1].num}
    `);
  } catch (e) {
    console.log(e);
  }
};

main();
// const userPromise = obterUser();
// para success, usamos .then
// para erro, usamos .catch

// Chamada da função com promises
// userPromise
//   .then((user) => {

//     setTimeout(() => {
//       console.log("User: ", user);
//     }, 1000);

//     return obterTelefone(user.id)
//       .then((tel) => {

//         setTimeout(() => {
//           console.log("Phone: ", tel);
//         }, 1000);

//         return obterEndereco(user.id).then((adress) => {
//           return adress;
//         });
//     });
//   })
//   .then((res) => {

//     setTimeout(() => {
//       console.log("Adress: ", res);
//     }, 1000);

//     setTimeout(() => { }, 3000);

//   })
//   .catch((err) => console.log("Deu ruim", err));

// Chamada da função sem promises
// obterUser(function resolver(err, user) {
//   if (err) {
//     console.error("Deu ruim em usuario", err);
//     return;
//   }

//   obterTelefone(user.id, function resolver(err1, telefone) {
//     if (err1) {
//       console.error("Deu ruim em telefone", err1);
//       return;
//     }

//     obterEndereco(user.id, function resolver(err2, endereco) {
//       if (err2) {
//         console.error("Deu ruim em endereço", err2);
//         return;
//       }

//       setTimeout(function () {
//         console.log(`
//         Nome: ${user.nome},
//         Endereço: ${endereco.rua}, ${endereco.num},
//         Telefone: (${telefone.ddd})${telefone.telefone}
//         `);
//       }, 2000)
//     });
//   });
//   return;
// });
