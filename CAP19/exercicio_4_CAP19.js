// function simulaPromise(object, time) {
//   setTimeout(() => {
//     console.log(object);
//   }, time);
// }

// function boolePromise(boole) {
//   let promise = new Promise((realese, reject) => {
//     if (boole) {
//       realese("ok");
//     } else {
//       reject("not ok");
//     }
//   });
//   promise
//     .then((result) => {
//       simulaPromise(result, 5000);
//     })
//     .catch((reject) => {
//       simulaPromise(reject, 5000);
//     });
// }
// boolePromise(true);

function simulaPromise(boole, time) {
  setTimeout(() => {
    let promise = new Promise((realise, reject) => {
      if (boole) {
        realise("Ok");
      } else {
        reject("Not ok");
      }
    });
    promise
      .then((object) => {
        console.log(object);
      })
      .catch((object) => {
        console.log(object);
      });
  }, time);
}
simulaPromise(false, 5000);
