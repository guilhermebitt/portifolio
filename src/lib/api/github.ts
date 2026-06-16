import { z } from "zod";

const UserSchema = z.object({
  login: z.string(),
  public_repos: z.number(),
  followers: z.number(),
});

const RepoSchema = z.object({
  name: z.string(),
  stargazers_count: z.number(),
  languages_url: z.string(),
});

const ReposSchema = z.array(RepoSchema);

const LanguagesSchema = z.record(z.string(), z.number());

export async function getUser(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  );

  return UserSchema.parse(await response.json());
}

export async function getRepos(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`
  );

  return ReposSchema.parse(await response.json());
}

export function getTotalStars(
  repos: z.infer<typeof ReposSchema>
) {
  return repos.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0
  );
}

export async function getTopLanguages(
  repos: z.infer<typeof ReposSchema>
) {
  const totals: Record<string, number> = {};

  await Promise.all(
    repos.map(async (repo) => {
      const response = await fetch(repo.languages_url);

      const languages = LanguagesSchema.parse(
        await response.json()
      );

      Object.entries(languages).forEach(([lang, bytes]) => {
        totals[lang] = (totals[lang] || 0) + bytes;
      });
    })
  );

  const totalBytes = Object.values(totals).reduce(
    (a, b) => a + b,
    0
  );

  return Object.entries(totals)
    .map(([name, bytes]) => ({
      name,
      percent: Math.round((bytes / totalBytes) * 100),
    }))
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 5);
}