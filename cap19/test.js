// const a = 10;
// const b = 17;

// let promise = new Promise((resolve, reject) => {
//   const status = false;
//   if (status) {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 5000);
//   } else {
//     reject("Erro!");
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   });
// console.log("How you doin?");

//PART 2
// let promise = new Promise((resolve, reject) => {
//   throw new Error("erro");
//   resolve("ok");
// });
// promise
//   .then((data) => console.log(`Sucesso${data}`))
//   .catch((data) => console.log(`falha: ${data}`));

const test = [1, 2, 3, 4];
const b = test.find((element) => {
  return element >= 3;
});
console.log(b);
