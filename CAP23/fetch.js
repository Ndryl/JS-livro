fetch("https://pokeapi.co/api/v2")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log("Deu tudo errado"));
