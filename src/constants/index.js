import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  atos,
  threejs,
  java,
  cPlusPlus,
  python,
  real_estate,
  dall_e,
  vegan_store,
  def_profile,
  trivia_software,
  ai_summarizer,
  arwasys,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
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
    title: " Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
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
    name: "Java",
    icon: java,
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
    name: "C++",
    icon: cPlusPlus,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Arwasys Technokraft Pvt. Ltd.",
    icon: arwasys,
    iconBg: "#E6DEDD",
    date: "June 2023 - Oct 2023",
    points: [
      "Developed a Stock Management System, elevated user experiences, and conducted forward-thinking research on emerging technologies.",
      "Learned and implemented a diverse range of technologies, including JavaScript, React, Node.js,Express.js, MongoDB, Python, Django, Rest API, and Git",
      "Actively engaged in project reviews, consistently providing valuable suggestions and driving enhancements to existing systems.",
    ],
  },
  {
    title: "Associate Developer",
    company_name: "Atos Syntel",
    icon: atos,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Oct 2022",
    points: [
      "Collaborated with different teams to design, develop, and maintain software programs, resulting in increased efficiency and productivity.",
      "My involvement in the project included both the development of new features as well as the upkeep of an existing Java based system. The system also relied on SQL as its means to store data in the database.",
      "Participated in the development and upkeep of the mainframe system, resulting in the reliable and accurate extraction of business data.Assisted in modernizing business functionalities and facilitating their integration into the production environment",
      "Conducted thorough testing and debugging of software applications to identify and resolve issues, resulting in a significant reduction in system downtime and an increase in overall performance.",
      "Assisted in modernizing business functionalities and facilitating their integration into the production environment.",
    ],
  },
  {
    title: "Software Intern",
    company_name: "Trivia Software",
    icon: trivia_software,
    iconBg: "#E6DEDD",
    date: "Dec 2019 - March 2020",
    points: [
      "Acquired experience with Python 3.x related technologies.",
      " Stayed up-to-date with emerging trends and technologies in software development.",
      "Implemented Management System Design using tkinter for GUI and Oracle for Oracle Database CRUD operations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "During the whole internship we found Abdul Hannan extremely inquisitive and hardworking.",
    name: "Employee",
    designation: "HR",
    company: "Trivia Software",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    image: def_profile,
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their work's success like Abdul Hannan does.",
    name: "Employee",
    designation: "Manager",
    company: "Atos",
    image: def_profile,
  },
  {
    testimonial:
      "He has displayed professionalism, commitment and strong work ethic, making a significant impact on our projects",
    name: "Director",
    designation: "Director",
    company: "Atos",
    image: def_profile,
  },
];

const projects = [
  {
    name: "Real Estate",
    description:
      "Web-based platform that allows users to search, book, and buy property from providers, providing a convenient and efficient solution for accomodation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: real_estate,
    source_code_link: "https://github.com/abdulhannan13300/real_estate",
    // live_demo_link: ""
  },
  {
    name: "Dall-E clone",
    description:
      "The platform uses AI to create interactive art through real-time image style manipulation using the Dall-E API, allowing users to share and download their creations within the community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "orange-text-gradient",
      },
    ],
    image: dall_e,
    source_code_link: "https://github.com/abdulhannan13300/dall-e-clone",
    // live_demo_link: ""
  },
  {
    name: "AI Summarizer",
    description:
      "Simplify your reading with Summize, an article summarizer that transforms lengthy articles into clear and concise summaries for a quick read. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: ai_summarizer,
    source_code_link: "https://github.com/abdulhannan13300/ai_summarizer",
    // live_demo_link: ""
  },
];

export { services, technologies, experiences, testimonials, projects };
