import type { ImageMetadata } from "astro";
import type { icons } from "@lucide/astro";

export interface Header {
  logoTitle: string;
}

export interface Footer {
  content: string;
}

interface IconLink {
  icon: keyof typeof icons;
  href: string;
}

interface Education {
  institution: string;
  timeline: string;
  subtitle: string;
  description: string;
}

interface WorkExperience {
  company: string;
  timeline: string;
  subtitle: string;
  description: string;
}

export interface About {
  headLine: string;
  tagLine: string;
  profilePic: ImageMetadata;
  description: string;
  links: IconLink[];
  resumeHref: string;
  workExperience: WorkExperience[];
  education: Education[];
  getInTouch: string;
}

export interface Project {
  logoImage: ImageMetadata;
  title: string;
  techs: string[];
  description: string;
  sourceHref?: string;
  liveHref?: string;
}
