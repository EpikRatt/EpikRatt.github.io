// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";

import BriefImage from "./assets/projects/brief.svg";

export const SITE_URL: string = "https://matthewbridge.com";

export const ENABLE_STARDUST_BG: boolean = true;

export const meta = {
  about: {
    // Home Page page
    title: "Matthew Bridge",
    description:
      "Hi, I'm Matthew Bridge, a Computer Science Student. Welcome to my portfolio website!",
  },
  projects: {
    title: "Projects | Matthew Bridge",
    description:
      "Here are my projects — things I’ve built or things I’m working on.",
  },
  blog: {
    title: "Blog | Matthew Bridge",
    description:
      "This is my blog — I'll probably remove this lol.",
  },
  // blog post title and description are taken from the variables in markdown file
};

export const header: Header = { logoTitle: "MB" };

export const footer: Footer = {
  // parses html
  content:
    "Made by Matthew Bridge • <a href='https://github.com/EpikRatt/EpikRatt.github.io' class='link'>Source Code</a>",
};

export const about: About = {
  // parses html
  headLine:
    "Hi, I'm <span class='fancy-highlight font-black'>Matthew Bridge</span>",
  tagLine: "Computer Science Student / AI Concentration",
  profilePic: ProfilePic,
  // parses html
  description:
    "I'm a Computer Science student concentrating in AI with practical experience in enterprise IT support, hardware diagnostics, and lab instruction. Seeking to leverage a strong foundation in machine learning, full-stack programming, and systems administration to transition into a software engineering or machine learning development role.",
  links: [
    // Lucide icons
    { icon: "Github", href: "https://github.com/EpikRatt/" },
    { icon: "Linkedin", href: "https://www.linkedin.com/in/matthew-l-bridge" },
    { icon: "Email", href: "MBridge6429@gmail.com"},
  ],
  resumeHref:
    "https://docs.google.com/document/d/1mRAC7ekFLeKbJV7AjhhhxAJ1fN7XGpqvDKUFrRuNclU/edit?usp=share_link",
  workExperience: [
    {
      title: "Full Stack Developer Intern",
      timeline: "May 2024 - Oct 2024",
      company: "Rabbitsquare • India",
      description:
        "Developed a LAMP stack web solution for a Civil Service academy, including a customizable public website, management portal, user portal, and exam result publishing system.",
    },
  ],
  education: [
    {
      title: "Bachelor of Computer Application",
      timeline: "Jun 2022 - Apr 2025",
      institution: "Nirmala College Muvattupuzha • India",
      description:
        "Studied core computer science fundamentals including programming languages, data structures, algorithms, operating systems, and networking, with practical experience in Java, C/C++, JavaScript, PHP, and Linux.",
    },
  ],
};

export const projects: Project[] = [
  {
    logoImage: BriefImage,
    title: "In Development",
    techs: ["Field 1", "Field 2"],
    description:
      "Please Pardon our Dust.",
    sourceHref: "",
    liveHref: "",
  },
];

// add blog articles in /src/content/blog
