import { baseConfig } from "../base";
import { education } from "../education";
import { experience } from "../experience";
import { hobbies } from "../hobbies";
import { memberships } from "../memberships";
import { news } from "../news";
import { projects } from "../projects";
import { research, researchIntro } from "../research";

export const en = {
  ...baseConfig,
  experience,
  researchIntro,
  research,
  news,
  projects,
  education,
  memberships,
  hobbies,
  ui: {
    nav: {
      news: "News",
      about: "About",
      experience: "Work Experience",
      education: "Education",
      projects: "Projects",
      research: "Research",
      more: "More About Me",
      involvement: "Involvement",
      hobbies: "Creative Interests",
    },
    hero: {
      greeting: "Hello! 👋",
    },
    about: {
      title: "About Me",
      keywords: "Keywords",
      skills: "Skills",
    },
    news: {
      title: "News",
      subtitle: "These updates mark key milestones along my journey.",
      hint: "Swipe or scroll horizontally",
    },
    experience: {
      title: "Work Experience",
    },
    education: {
      title: "Education",
      highlights: "Highlights",
      honors: "Honors",
    },
    projects: {
      title: "Projects",
    },
    research: {
      title: "Research",
      viewWork: "View work →",
      mentor: "Mentor",
      publication: "Publication",
    },
    memberships: {
      title: "Involvement",
      pageTitle: "Involvement",
      pageIntro:
        "Clubs, memberships, and volunteer work that shape my community and technical practice.",
    },
    hobbies: {
      title: "Creative Interests",
      pageIntro:
        "A look at the personal projects that balance my engineering work—photography and poetry.",
      badge: "Creative",
    },
    common: {
      moreAbout: "More About Me",
      rights: "All rights reserved.",
      thanks: "Thanks for visiting!",
    },
  },
};
