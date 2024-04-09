async function showGitHubUser() {
  const url = `https://pokeapi.co/api/v2`;
  const response = await fetch(url);
  const show = await response.json();
  console.log(show);
}
showGitHubUser();
