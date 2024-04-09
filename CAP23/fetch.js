// fetch("https://pokeapi.co/api/v2")
//   .then((res) => res.json())
//   .then((res) => console.log(res.region))
//   .catch((err) => console.log("Deu tudo errado"));

// [UTILIZAÇÃO DE ASYNC/AWAIT]

async function showPokemon(comand) {
  const url = `https://pokeapi.co/api/v2`;
  const response = await fetch(url);
  const show = await response.json();
  console.log(show.version);
}
showPokemon("version");
