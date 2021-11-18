export const getUserRepos = async (username, pageNum = 1, maxResult = 5) => {
  const URL = `https://api.github.com/users/${username}/repos?per_page=${maxResult}&page=${pageNum}`;

  const res = await fetch(URL, {
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  });

  const data = await res.json();

  return data;
};
