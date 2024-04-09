// async function showGitHubUserAndRepos(username) {
//   const userPromise = fetchFromGitHub(`/users/${username}`);
//   const reposPromise = fetchFromGitHub(`/repos/${username}`);

//   const user = await userPromise;
//   const repos = await reposPromise;

//   console.log(user.name);
//   console.log(respos.length);
// }

async function showGitHubUserAndRepos(username) {
  const [user, repos] = await Promise.all([
    (userPromise = fetchFromGitHub(`/users/${username}`)),
    (reposPromise = fetchFromGitHub(`/repos/${username}`)),
  ]);
  console.log(user.name);
  console.log(repos.length);
}
