type Identified = { id: string };

export interface ExperienceItem extends Identified {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
  links?: { label: string; href: string }[];
}

export interface ResearchItem extends Identified {
  org: string;
  title: string;
  dateRange: string;
  focus: string;
  publicationTitle: string;
  publicationLink: string;
  mentor?: string;
  bullets?: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: { email: string; linkedin: string; twitter: string; github: string };
  aboutMe: string;
  keywords: string[];
  skills: string[];
  experience: ExperienceItem[];
  researchIntro: string;
  research: ResearchItem[];
  news: (Identified & { title: string; date: string; description: string })[];
  projects: (Identified & { name: string; description: string; link: string; skills: string[] })[];
  education: (Identified & {
    school: string;
    degree: string;
    dateRange: string;
    achievements: string[];
    honors: string[];
  })[];
  memberships: (Identified & {
    org: string;
    role: string;
    dateRange: string;
    description: string;
  })[];
  hobbies: (Identified & {
    name: string;
    description: string;
    highlights: string[];
    link?: { label: string; href: string };
  })[];
  ui: {
    nav: {
      news: string; about: string; experience: string; education: string;
      projects: string; research: string; more: string; involvement: string;
      hobbies: string; openMenu: string; closeMenu: string;
    };
    hero: { greeting: string; ctaPrimary: string; ctaSecondary: string };
    about: { title: string; keywords: string; skills: string };
    news: { title: string; subtitle: string; hint: string };
    experience: { title: string };
    education: { title: string; highlights: string; honors: string };
    projects: { title: string };
    research: { title: string; viewWork: string; mentor: string; publication: string };
    memberships: { title: string; pageTitle: string; pageIntro: string };
    hobbies: { title: string; pageIntro: string; badge: string };
    poetry: {
      title: string; meta: string; intro: string; favorite: string;
      read: string; back: string; previous: string; next: string;
    };
    common: { moreAbout: string; rights: string; thanks: string };
  };
}
