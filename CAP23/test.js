// const dados = [
//   { nome: "Hendryl", idade: 23 },
//   { nome: "João", idade: 22 },
//   { nome: "Luiz", idade: 1 },
// ];
// let dados_partes = dados.reduce(function (cont, element) {
//   for (let [k, v] of Object.entries(element)) {
//     console.log(`${k} : ${v}`);
//   }
// }, 0);
// console.log(dados_partes);

// let testando = new Map();
// testando.set("Hendryl", "23");
// testando.set("João", "22");
// console.log(testando.get("Hendryl"));

// [INTERAÇÃO DE OBJETOS]

// let array = [];
// let lista = Object.entries(dados);
// for (let [a, b] of lista) {
//   let nome = Object.entries(b);
//   //console.log(nome);
//   let mapa = new Map(nome);
//   //console.log(mapa.get("nome"));
//   let name = mapa.get("nome");
//   array.push(name);
// }
// console.log(array);

// [PADEND]
// let len = 0;
// for (let element of array) {
//   if (element.length > len) {
//     len = element.length;
//   }
// }
//console.log(len);
// array.forEach((ver) => {
//   console.log(ver.padStart(len, "-"));
// });

//  array.forEach((element) => {
//    console.log(element.padEnd());
// });

fetch("https://api.github.com/users/DiegoPinho")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log("deu problema :/"));
