import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Passionate full stack developer with 3 years of experience in building robust, scalable web applications. Skilled in front-end technologies like HTML, CSS, Bootstrap, React, Next.js, and Vue.js, and proficient in back-end frameworks including PHP, Laravel,Pyhon, Django and Node.js. Experienced in working with databases such as MySQL, PostgreSQL, and MongoDB. Dedicated to delivering innovative solutions that drive business growth and enhance user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, VueJS, PHP, Laravel, Python, Django, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "XPRESS in Town Ltd.",
    description: `Developed a web-based admin panel using Laravel, created custom APIs for area mapping, order tracking, and bulk uploads to external APIs, and integrated these with both the merchant and admin panels.`,
    technologies: ["Javascript", "Vue.js", "PHP", "Laravel", "MySQL"],
  },
  {
    year: "2023 - 2024",
    role: "IT Support",
    company: "Dream N Decor",
    description: `Maintained the in-house invoice system to ensure smooth operations and occasionally communicated with customers to address their order inquiries.`,
    technologies: [ "PHP", "Laravel", "MySQL"],
  },
  {
    year: "2022 - 2023",
    role: "Senior Executive Software Engineer",
    company: "Paperfly",
    description: `I built critical features like the order placement system, tracking orders, invoice lists, and a dashboard. I integrated PHP APIs using Redux and implemented improvements based on client and management feedback to enhance the customer experience. Key features included an auto-complete function for customer details, a client profile section, and pagination in the order history for easy access to records. Additionally, I developed the Report feature, implemented the Update History section, and worked on the ERP system by building the Excel Order Upload feature and mail templates with dynamic data.`,
    technologies: ["Javascript", "React.js", "PHP", "MySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Junior Software Engineer",
    company: "Bhalogari.com",
    description: `As a core member of the frontend team for bhalogari.com, I handled the complete frontend development from scratch, ensuring the site was fully responsive across all devices. I developed key features like the car details page and the merchant page, where showroom owners could view vehicle details. I integrated Django APIs, tested the applications, and wrote test cases to ensure quality. I also worked on identifying areas for improvement to enhance user experience. In the later stages of the project, I contributed to backend tasks, including data insertion and API development, such as customer feedback systems. I also worked on a Japanese Construction Site project using Laravel. Also Created APIs for the in house attendance system.`,
    technologies: ["HTML", "CSS", "Bootstrap","JavaScript", "PHP", "Laravel", "React", "Django", "Postgres", "MySQL"],
  },
  {
    year: "2020",
    role: "Full Stack Developer",
    company: "Soft IT Care",
    description: `I developed essential website functionalities from frontend to backend using Laravel, maintained content management systems for both corporate and client sites with WordPress, and customized WordPress themes to meet specific requirements.`,
    technologies: ["PHP", "Laravel","Wordpress"],
  },
  {
    year: "2019",
    role: "Internship",
    company: "Standard Bank Limited",
    description: `During my internship in both the Marketing and IT departments of a bank, I gained a comprehensive understanding of various operations and processes. In the Marketing department, I learned how to open bank accounts and managed client interactions, including handling checkbooks and important documents. I also gained experience in preparing L/C files, FDD reports, and drafting communications for other banks, branches, and clients. In the IT department, I worked on setting up new PCs for bank branches, diagnosing hardware issues, and configuring IP addresses. I also installed components such as power supplies and RAM, and learned how the bank tracks and manages IT equipment across different branches. These experiences provided me with practical skills and a holistic view of the bank’s operations in both client-facing and technical capacities.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
