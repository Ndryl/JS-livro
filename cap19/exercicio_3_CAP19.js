// function boobleana(objeto, compara) {
//   if (objeto === compara) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function simulaPromise(objeto, compara) {
//   if (boobleana(objeto, compara) === true) {
//     console.log("Oske");
//   } else {
//     console.log("Não oske!");
//   }
// }
// simulaPromise("Hendryl", "Endril");

let sucesso = new Promise((resolve, reject) => {
  let constante = false;
  if (constante) {
    resolve(true);
  } else {
    reject(false);
  }
});
sucesso
  .then((objeto) => {
    console.log("Tudo certo");
  })
  .catch((objeto) => {
    console.log("Tudo errado");
  });
