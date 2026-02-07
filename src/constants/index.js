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
  space,
  java,
  cpp,
  postman,
  python,
  chatterbox

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



// const experiences = [
//   {
//     title: "Web Developer Intern",
//     company_name: "Infomatix Web Technologies LLP ",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "Apr 2025 - Nov 2025",
//     points: [
//       // "	Spearheaded multiple projects from inception to delivery, covering wireframing to final implementation, utilizing frontend technologies like HTML, CSS, Bootstrap, JavaScript, and ReactJS for user interfaces.",
//       // "Engineered reusable code components, reducing project costs, and enhancing overall efficiency.",
//       // "Designed and deployed user interfaces for hospital management systems, CRM web applications, and survey systems, optimizing user experiences and securing project approval and funding post-completion.",
//       // "Created and integrated webpages for surveys and tracking systems, leading to a 30% improvement in data collection efficiency.	",
//       // "Integrated REST APIs into React modules using Axios for CRUD operations, handling async data flows and error states across multiple CRM and ERP features"
//       "I worked on multiple production-level web applications, primarily CRM systems and a Hospital ERP, taking features from early UI planning to live deployment.",

//       "I led the frontend development of 18+ CRM modules using React and Bootstrap, focusing on responsive layouts and performance across devices. This helped the team ship features faster and improve overall product stability.",

//       "For a Hospital ERP system, I built 10 core modules such as doctor reports, patient profiles, appointment flows, QR-based registrations, and e-prescriptions. These tools reduced manual effort for admins and made everyday workflows smoother.",

//       "I also developed reusable survey and tracking components with real-time validation and conditional logic for a case management system, which improved data quality and reduced submission errors.",

//       "To keep the codebase maintainable, I modularized the frontend into reusable components and optimized assets, making it easier to scale features across projects.",

//       "Across these systems, I integrated REST APIs using Axios, handling data fetching, error states, and UI updates for real-world CRUD workflows."
//     ],
//   },
//   {
//     title: "Web Developer Intern",
//     company_name: "Virtuoso Apps pvt.",
//     icon: virtuoso,
//     iconBg: "#E6DEDD",
//     date: "Nov 2024 - Feb 2025",
//     points: [
// "Worked on the frontend of a client-facing web platform built with React.js, developing and maintaining multiple screens used in day-to-day workflows.",

// "Built and refactored reusable React components to standardize UI patterns across the application and improve long-term maintainability.",

// "Implemented form-heavy interfaces with conditional rendering, validation, and dynamic state handling, supporting real user interactions and data updates.",

// "Handled responsive layouts and incremental UI fixes, resolving styling and rendering issues to ensure consistent behavior across common screen sizes."
//     ],
//   }
// ];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Infomatix Web Technologies LLP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Apr 2025 - Nov 2025",
    points: [
      "Worked on multiple production-level web applications, primarily CRM systems and a Hospital ERP, contributing from early UI planning to live deployment.",
      "Led frontend development of 18+ CRM modules using React and Bootstrap, focusing on responsive layouts and performance across devices to support faster feature delivery and overall product stability.",
      "Built 10 core Hospital ERP modules including doctor reports, patient profiles, appointment workflows, QR-based registrations, and e-prescriptions, streamlining administrative workflows and reducing manual effort.",
      "Developed reusable survey and tracking components with real-time validation and conditional logic for a case management system, improving data accuracy and submission reliability.",
      "Modularized the frontend into reusable components and optimized assets to improve maintainability and support scalable feature development across projects.",
      "Integrated REST APIs using Axios, handling data fetching, error states, and UI updates for real-world CRUD workflows across CRM and ERP systems."
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Virtuoso Apps Pvt. Ltd.",
    icon: virtuoso,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Feb 2025",
    points: [
      "Contributed to the frontend of a client-facing web platform built with React.js, developing and maintaining multiple screens used in day-to-day workflows.",
      "Built and refactored reusable React components to standardize UI patterns and improve long-term maintainability of the codebase.",
      "Implemented form-heavy interfaces with conditional rendering, validation, and dynamic state handling to support real user interactions and data updates.",
      "Handled responsive layouts and incremental UI fixes, resolving styling and rendering issues to ensure consistent behavior across common screen sizes."
    ],
  }
];


const projects = [
  {
    name: "ChatterBox",
    description:
      "ChatterBox is a real-time chat application designed for seamless messaging and interaction. Built with React, Node.js, and Socket.io, it provides an intuitive and modern user experience for instant communication.",
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
        name: "socket.io",
        color: "green-text-gradient",
      },
    ],
    image: chatterbox,
    source_code_link: "https://github.com/shraddhaHS/Chatterbox-Chat-App",
  },
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
    name: "Parallax",
    description:
      "Explore the universe with this futuristic space tourism website I designed! Focused purely on frontend, I crafted a sleek, interactive UI featuring vibrant space imagery, dynamic animations, and intuitive navigation. The design captures the excitement of space travel while ensuring a smooth, engaging user experience across all devices.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: space,
    source_code_link: "https://shraddhahs.github.io/space/",
  },
];

export { services, technologies, experiences, projects };