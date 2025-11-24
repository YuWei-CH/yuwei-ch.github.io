import { baseConfig } from "./config/base";
import { experience } from "./config/experience";
import { researchIntro, research } from "./config/research";
import { news } from "./config/news";
import { projects } from "./config/projects";
import { education } from "./config/education";
import { memberships } from "./config/memberships";
import { hobbies } from "./config/hobbies";

export const siteConfig = {
  ...baseConfig,
  experience,
  researchIntro,
  research,
  news,
  projects,
  education,
  memberships,
  hobbies,
};
