import { GitHubStatsSchema } from "../types/githubTypes";
import {
  getRepos,
  getTopLanguages,
  getTotalStars,
  getUser,
} from "../api/github";

export async function getGitHubStats(username: string) {
  const [user, repos] = await Promise.all([
    getUser(username),
    getRepos(username),
  ]);

  const stats = {
    username: user.login,
    publicRepos: user.public_repos,
    followers: user.followers,
    stars: getTotalStars(repos),
    contributionsLastYear: 0,
    topLanguages: await getTopLanguages(repos),
  };

  return GitHubStatsSchema.parse(stats);
}