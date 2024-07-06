import { meta, shopify, starbucks, tesla, honeywell, mavenmagnet, mavensilicon, shmt } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "MavenMagnet",
        icon: mavenmagnet,
        iconBg: "#accbe1",
        date: "July 2022 - November 2022",
        points: [
            "Collaborated with a talented team of developers and designers to develop a dashboard using ReactJS, which allowed users to visualize and analyze large sets of data in an intuitive and interactive manner.",
            "Leveraged my proficiency in JavaScript and JQuery to enhance the dashboards functionality",
            "Designed and developed graphs using the different libraries present in ReactJS",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "SHMT",
        icon: shmt,
        iconBg: "#fbc3bc",
        date: "Jan 2022 - June 2022",
        points: [
            "Worked extensively with HTML, CSS, and ReactJS in front-end development. Collaborated on developing responsive websites with pixel-perfect designs and optimal user interactions",
            "Contributed to implementing responsive design techniques by using CSS media queries and Bootstrap’s responsive grid system to create flexible layouts for consistent experiences across devices",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Sustainability COE Intern",
        company_name: "Honeywell Technology Solutions",
        icon: honeywell,
        iconBg: "#b7e4c7",
        date: "Jan 2024 - July 2024",
        points: [
            "Conducted Life Cycle Assessments (LCA) and delivered presentations on sustainability standards (RoHS, ISO, ECD, IEC, WEEE) in the HBT team.",
            "Analyzed vehicle technologies for environmental impact using literature benchmarking and evaluated jet fuel production from ethanol via SimaPro",
            "Developed skills in teamwork, collaboration, and application of ESG principles in sustainability projects.",
        ],
    },
    {
        title: "RTL Design Verifier and Trainee",
        company_name: "MavenSilicon",
        icon: mavensilicon,
        iconBg: "#a2d2ff",
        date: "May,2023-June,2023",
        points: [
            "Designed RISC-V RV321 RTL using Verilog HD",
            "Designed all the submodules using Verilog HDL and integrated the codes in the final code.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Sewanti27',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sewanti-lahiri-webdeveloper/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Brainwave',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Apple Titanium Website Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '3D Portfolio',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];