// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";
import PlaceHolderImage from "./assets/projects/placeholder.svg";

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
    "Made by Matthew Bridge • <a href='https://github.com/EpikRatt/EpikRatt.github.io' class='link'>Source Code</a> • Theme Inspired by <a href='https://github.com/shonebinu/portfolio' class='link'>shonebinu</a>",
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
    "https://drive.google.com/file/d/1b4Bus4aoiGnSJsaQcoB3ZrkDbvHwArI4/view?usp=share_link",

  education: [
    {
      institution: "University of Massachusetts Dartmouth • Dartmouth, MA",
      timeline: "Sept 2023 - May 2027",
      subtitle: "Bachelor of Computer Science • 3.4 GPA • Dean's List",
      description:
        "Studying CS fundamentals including Data Structures, Operating Systems, Machine Learning and Agential AI. With coding experience in Java, C/C#, JavaScript, and Python.<br />While attending I have helped in the labs as Lab Mentor and in the Sustainability club with computer repair.",
    },
    {
      institution: "Upper Cape Cod Technical Highschool • Bourne, MA",
      timeline: "Sept 2015 - May 2019",
      subtitle: "Information Technology Shop • 3.3 GPA • Top Shop Award",
      description:
        "Gained foundational skills in Networking, Operating Systems, Hardware, and Programming. Worked on the School Help desk supporting both staff and students.",
    },
  ],
  workExperience: [
    {
      company: "Master Millwork • Wareham, MA",
      timeline: "June 2022 - August 2023",
      subtitle: "IT Support Specialist",
      description:
        "Coordinated with an external MSP to support 90+ users across hardware and software platforms. Administered Microsoft 365 and Windows Server environments to maintain system integrity and security.",
    },
    {
      company: "SencorpWhite • Barnstable, MA",
      timeline: "June 2019 - June 2022",
      subtitle: "IT Intern • Desktop Analyst",
      description:
        "Collaborated in a 4-person team to support 200+ users and manage the company Help Desk. Performed administration for Microsoft 365 and Windows Server OS while documenting repair procedures.",
    },
    {
      company: "Kool Kone • Wareham, MA",
      timeline: "April 2016 - March 2020",
      subtitle: "Dish Washer • Fry Cook",
      description:
        "Optimized kitchen workflows in a high-volume environment to ensure timely order delivery. Trained and onboarded new hires on operational standards and safety procedures.",
    },
  ],
  // parses html
  getInTouch:
    "Send me an email at <a href='mailto:mbridge6429@gmail.com' class='primary-underline'>MBridge6429@gmail.com</a>.",
};

export const projects: Project[] = [
  {
    logoImage: PlaceHolderImage,
    title: "Agentic Systems in Unity",
    techs: ["Unity", "C#", "Python", "ML-Agents"],
    description:
      "Developing an autonomous decision-making agent using the ML-Agents pipeline in Unity, that will maximize its output(Money) while managing needs(Hunger and Energy) in a simulated room.",
    sourceHref: "https://github.com/EpikRatt/Time-is-Money",
    liveHref: "",
  },
  {
    logoImage: PlaceHolderImage,
    title: "Machine Learning Project",
    techs: ["Python", "Machine Learning"],
    description:
      "Following the machine learning pipeline to solve a problem.",
    sourceHref: "",
    liveHref: "",
  },
];
