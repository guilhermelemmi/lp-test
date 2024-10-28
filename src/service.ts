import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: 'YOUR_GITHUB_KEY_HERE',
});

export const fetchUser = async (username: string) => {
  const user = await octokit.request(`GET /users/${username}`, {
    username: 'USERNAME',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  return user;
};
