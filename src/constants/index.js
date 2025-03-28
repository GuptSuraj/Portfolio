import {
  upb,
  nitkkr,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Biryaniada,


  carrent,
  jobit,
  tripguide,
  threejs,
  flixhub,
  promptimg,
  homecrew,

} from "../assets";

import hsc from "../assets/hsc.jpeg";
import igcse from "../assets/igcse.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Engineering",
    company_name: "National institute of Technology, Kurukshetra",
    icon: nitkkr,
    iconBg: "#e2e1e8",
    date: "Dec 2021 - July 2025",
    points: [
      "Curent CGPA : 7.37",
      "Java, Python, HTML, CSS, JavaScript",
      "Data structures and alogrihms, Operating System, Object oriented programming, Database management system",
      "Participated in Hackthons",

    ],
  },

  {
    title: "Higher Secondary Education (Class XII)",
    company_name: "Kamaladevi College, Kalyan",
    icon: hsc,
    iconBg: "#e2e1e8",
    date: "Apr 2019 - Mar 2021",
    points: [
      "Passed with 82%"
    ],
  },

  {
    title: "International General Certificate of Secondary Education (Class X)",
    company_name: "Ira Global School, Dombivali",
    icon: igcse,
    iconBg: "#e2e1e8",
    date: "Apr 2019 - Mar 2021",
    points: [
      "Passed with 57.8%"
    ],
  }
];



const projects = [
  {
    name: "Confluence Website",
    description: "The official website for Confluence, a major North Indian college fest. Implemented dynamic animations and responsive layouts, enhancing user experience and engagement. Ensured seamless integration of event details, registrations, and updates for better accessibility. Collaborated with designers and backend developers to create a visually appealing and functional platform.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "purple-text-gradient",
      },
    ],
    image: homecrew,
    source_code_link: "https://www.confluencenitkkr.com/",
  },
  {
    name: "Biryaniada",
    description:
      "Developed a web application for a local restaurant, enabling online food ordering with intuitive UI/UX andseamless authentication with passwordless OTP-based login using Firebase. Enhanced user engagement with features like WhatsApp order confirmations and online payments, improvingcustomer convenience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "purple-text-gradient",
      },
      {
        name: "Razorpay",
        color: "orange-text-gradient",
      },
    ],
    image: Biryaniada, // Replace 'flixhub' with the actual image URL for your Flixhub project.
    source_code_link: "https://tba-rust.vercel.app/", // Replace with the actual GitHub repository link for Flixhub.
  },
];


export { services, technologies, experiences, projects };