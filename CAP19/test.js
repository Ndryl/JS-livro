const { text } = require("express");

function sum(a, b) {
  return a + b;
}

let promise = new Promise((resolve, reject) => {
  let resultado = true;
  if (resultado) {
    let c = sum(2, 3) + 2;
    resolve({ nome: "Hendryl", idade: 25 });
  } else {
    reject("Deu tudo errado!");
  }
});

fetch("https://pokeapi.co/api/v2")
  .then((response) => {
    response.json().then((resposta) => {
      console.log(resposta.berry);
    });
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => {
    console.log("Terminou");
  });
