// function doSomething(callback) {
//     console.log('i did something');
//     callback();
//   }

//   doSomething(function(){
//     console.log('i did something AFTER!');
//   })

async function doSomething(callback) {
  console.log("i did something");
  await callback();
}

doSomething(() => {
  console.log("I did something AFTER!");
});
