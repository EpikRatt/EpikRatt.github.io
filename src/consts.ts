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
      "Here are my projects — things I’ve built or am currently working on.",
  },
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
    "Computer Science student concentrating in AI, with a background in Enterprise IT support. Looking to use a strong foundation in machine learning, full-stack development, and systems administration to transition to a software engineering or machine learning development role.",
  links: [
    // Lucide icons
    { icon: "Github", href: "https://github.com/EpikRatt/" },
    { icon: "Linkedin", href: "https://www.linkedin.com/in/matthew-l-bridge" },
  ],
  resumeHref:
    "https://docs.google.com/document/d/1mRAC7ekFLeKbJV7AjhhhxAJ1fN7XGpqvDKUFrRuNclU/edit?usp=share_link",
    education: [
    {
      title: "Bachelor of Computer Science",
      timeline: "Sept 2023 - May 2027",
      institution: "University of Massachusetts Dartmouth • Dartmouth, MA",
      description:
        "Studied core computer science fundamentals including Data Structures/Algorithms, Operating Systems, Machine Learning and Agential AI. With coding experience in Java, C/C#, JavaScript, and Python.",
    },
  ],
    workExperience: [
    {
      title: "Test",
      timeline: "May 2024 - Oct 2024",
      company: "Master Millwork • Wareham, Massachusetts",
      description:
        "Update Description.",
    },
  ],
  // parses html
  getInTouch:
    "Send me an email at <a href='mailto:mbridge6429@gmail.com' class='primary-underline'>MBridge6429@gmail.com</a>.",
};

export const projects: Project[] = [
  {
    logoImage: BriefImage,
    title: "Agentic Calendar/Task Manager",
    techs: ["React", "TypeScript"],
    description:
      "Currently in Development. Please pardon our dust!",
    sourceHref: "",
    liveHref: "",
  },
];
