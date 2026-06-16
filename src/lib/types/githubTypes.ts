import { z } from "zod";

export const GitHubStatsSchema = z.object({
  username: z.string(),
  publicRepos: z.number(),
  followers: z.number(),
  stars: z.number(),
  contributionsLastYear: z.number(),
  topLanguages: z.array(
    z.object({
      name: z.string(),
      percent: z.number(),
    })
  ),
});

export type GitHubStats = z.infer<
  typeof GitHubStatsSchema
>;