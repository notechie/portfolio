import soleSouls from "../assets/solesouls.jpg";
import jobPortal from "../assets/jobportal.jpg";
import touristRec from "../assets/touristrec.jpg";
import taskManager from "../assets/taskmanager.jpg";

export const HERO_CONTENT = `Driven by curiosity and a love for problem-solving.
Constantly learning, building, and creating smart solutions — with clean code, thoughtful design, and plenty of coffee to fuel the journey!`;

export const ABOUT_TEXT1 = `Hello! I'm Bhuban Mahapatra, a Master of Computer Applications (MCA) student at VIT Vellore. I'm passionate about technology and have a strong interest in full-stack development, cybersecurity, and intelligent systems. I aim to build efficient, user-friendly applications that solve real-world problems and create seamless experiences.`;

export const ABOUT_TEXT2 = `With hands-on experience in web development and AI-powered systems, I continuously work on expanding my technical skills and knowledge. I enjoy building solutions that not only work well but are also clean, maintainable, and scalable.`;

export const ABOUT_TEXT3 = `Outside of coding, I'm a foodie who loves exploring new cuisines, an anime enthusiast, and a traveler who enjoys discovering new places and cultures. While I tend to be introverted, I'm always open to learning new things, collaborating with others, and creating innovative solutions.`;

export const EDUCATION = [
  {
    year: "2024 - Present",
    role: "Master of Computer Applications",
    company: "Vellore Institute of Technology, Vellore, Tamil Nadu",
    description:
      "Pursuing post-graduation with specialization in full-stack development and machine learning applications.",
    technologies: [
      "JavaScript",
      "React.js",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Python",
    ],
  },
  {
    year: "2021 - 2024",
    role: "Bachelor of Computer Applications",
    company: "ITER, SOA University, Bhubaneswar, Odisha",
    description:
      "Developed a strong foundation in computer science with exposure to data structures, algorithms, and DBMS.",
    technologies: ["C", "C++", "Java", "SQL", "HTML", "CSS", "PHP"],
  },
  {
    year: "2020 - 2021",
    role: "Higher Secondary Education - Science (Phy, Chem, Bio)",
    company: "D.A.V. Public School, R K Puram, Hyderabad, Telangana",
    description:
      "Studied core science subjects including Physics, Chemistry, Biology, and Informatics Practices, with a focus on problem-solving and logical reasoning.",
    technologies: ["Python", "Basic HTML"],
  },
  {
    year: "2018 - 2019",
    role: "Secondary School (10th Grade)",
    company: "The Jain World School, Bognipur, Kanpur, Uttar Pradesh",
    description:
      "Completed foundational education with a strong focus on Mathematics and Science.",
    technologies: ["Basics of Programming", "Computer Applications"],
  },
];

export const PROJECTS = [
  {
    title: "SoleSouls - Shoe Selling Web App",
    image: soleSouls,
    github: "shoe",
    description:
      "A stylish and responsive front-end web application for a fictional shoe store. Built with HTML, CSS, and JavaScript, it features a modern layout, product showcase, and smooth interactions to simulate an engaging shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Job Portal Backend API",
    image: jobPortal,
    github: "https://github.com/notechie/job-portal-nodejs",
    description:
      "A robust backend API built using Node.js, Express, and MongoDB that powers a job portal system. It supports user registration, login, and secure JWT-based authentication. Authenticated users can create, update, delete, and filter job listings, with added support for job statistics, pagination, and advanced filtering options.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Swagger",
      "REST API",
    ],
  },
  {
    title: "Tourist Recommendation System",
    image: touristRec,
    github: "https://github.com/notechie/TourRecomSys",
    description:
      "A smart tourist recommendation system designed to suggest travel destinations based on user preferences. It combines content-based filtering, rule-based logic, and a Random Forest machine learning model to deliver accurate suggestions. The frontend is built using Flask and JavaScript, providing a simple and interactive user experience.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Task Manager with Calendar Integration",
    image: taskManager,
    github: "https://github.com/notechie/task-manager",
    description:
      "A feature-rich Flask-based to-do list application designed for efficient task management. It includes a clean and responsive UI, support for adding, editing, and deleting tasks, deadline tracking, and real-time status toggling between complete and incomplete. The app also integrates a calendar view to visually display tasks based on their due dates, enhancing organization and planning.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "JSON"],
  },
];
