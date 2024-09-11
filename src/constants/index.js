import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  figma,
  starbucks,
  virtuoso,
  studynotion,
  crowdaid,
  tripguide,
  threejs,
  java,
  cpp,
  solidity,
  postman,
  python

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI | UX Designer",
    icon: creator,
  },
  {
    title: "Software Developer",
    icon: mobile,
  }
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
    name: "figma",
    icon: figma,
  },
  {
    name: "c++",
    icon: cpp
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "java",
    icon: java
  },
  {
    name: 'postman',
    icon: postman
  }
];



const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Infomatix Web Technologies LLP ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - Jul 2023",
    points: [
      "	Spearheaded multiple projects from inception to delivery, covering wireframing to final implementation, utilizing frontend technologies like HTML, CSS, Bootstrap, JavaScript, and ReactJS for user interfaces.",
      "Engineered reusable code components, reducing project costs, and enhancing overall efficiency.",
      "Designed and deployed user interfaces for hospital management systems, CRM web applications, and survey systems, optimizing user experiences and securing project approval and funding post-completion.",
      "	Created and integrated webpages for surveys and tracking systems, leading to a 30% improvement in data collection efficiency.	"

    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Virtuoso Apps pvt.",
    icon: virtuoso,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Dec 2021",
    points: [
      "Led UI design and wireframing processes, prioritizing user-centric approaches for website development.",
      "Crafted captivating mockups for the website, integrating innovative design elements to elevate user experience.",
      "Acquired proficiency in Adobe Photoshop and Illustrator, employing advanced graphic design techniques to produce visually striking designs.",
    ],
  }
];


const projects = [
  {
    name: "StudyNotion",
    description:
      "StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack.",
    tags: [

      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient"
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
    ],
    image: studynotion,
    source_code_link: "https://github.com/shraddhaHS/Study-Notion",
  },
  {
    name: "CrowdAid",
    description:
      "CrowdAid is a blockchain crowdfunding app using Ethereum and Solidity for secure fundraising, with ReactJS for the UI and MetaMask for transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "web3 ",
        color: "pink-text-gradient",
      },
    ],
    image: crowdaid,
    source_code_link: "https://github.com/shraddhaHS/Crowdaid",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };