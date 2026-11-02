// ============================================================
// portfolioData.js — All portfolio text, links, and lists
// ============================================================

export const personalInfo = {
  name: "SANGEETA BENNE",
  firstName: "SANGEETA BENNE",
  brandName: "SANGEETA BENNE", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "",
  emails: {
    primary: "bennesangeeta@gmail.com",
    secondary: "",
  },
  summary:
    "Final-year Computer Science and Engineering graduate skilled in Java, Spring Boot, React.js, and SQL, passionate about building scalable full-stack web applications and solving real-world problems through technology.",
  resumeUrl: "/Resume.pdf", // put the PDF inside /public
};

// KodNest — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "KodNest",
  url: "https://www.kodnest.com/",
};

export const socialLinks = {
  github: "https://github.com/bennesangeeta-art",
  linkedin: "https://www.linkedin.com/in/sangeeta-benne-88a57827a/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm SANGEETA BENNE",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Building scalable full-stack web applications with Java, Spring Boot, React.js, and SQL to solve real-world problems through clean, modern technology.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:bennesangeeta@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">SANGEETA BENNE</span>, a Computer Science and Engineering graduate based in Bengaluru, India with a strong foundation in Java, Python, web development, and database management. I enjoy developing user-friendly applications and have worked on projects such as a Smart Vehicle Parking Management System and an E-Commerce Website using modern technologies, while sharpening my skills through the placement training program at KodNest. I am eager to contribute to a dynamic development team, enhance my technical skills, and grow as a software developer.`,
  techStack: ["Java", "Spring Boot", "React.js", "MySQL", "Python", "JavaScript"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured, end-to-end engineering approach from requirement analysis to production deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I analyze problem statements, user workflows, and system requirements to plan scalable full-stack architectures.",
    },
    {
      number: "02",
      title: "Design",
      text: "I design normalized relational database schemas, RESTful API contracts, and responsive user interfaces.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I build clean, modular backends with Java and Spring Boot paired with interactive React.js frontends.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I test endpoints thoroughly with Postman, manage versions with Git, and deploy applications to cloud platforms.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "SQL" },
        { name: "OOP & DSA" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "React.js" },
        { name: "Bootstrap" },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Spring Boot" },
        { name: "Java Servlets & JSP" },
        { name: "JDBC & REST APIs" },
        { name: "MySQL & PostgreSQL" },
        { name: "MongoDB & SQLite" },
      ],
    },
    {
      title: "Tools & Concepts",
      skills: [
        { name: "Git & GitHub" },
        { name: "VS Code & Eclipse" },
        { name: "Postman" },
        { name: "MVC Architecture" },
        { name: "Multithreading & Collections" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Full-Stack Academic Project Development",
    description:
      "Architected and delivered end-to-end web applications including ParkMate and SmartWay, coordinating database design, backend APIs, and responsive UI integration.",
    role: "Project Developer",
    badge: "Engineering",
  },
  {
    title: "Full-Stack & Problem-Solving Cohort",
    description:
      "Actively participated in collaborative coding sessions, peer code reviews, and full-stack application sprints using Java, Spring Boot, and React.js.",
    role: "Active Member",
    badge: "Community",
  },
];

export const internshipsList = [
  {
    organization: "KodNest",
    role: "Full Stack Developer Intern",
    duration: "4 Months",
    skills: [
      "Frontend Development",
      "Backend Programming",
      "Database Management",
      "Application Development",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "HTML/CSS/JS",
    ],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Collaborating effectively across frontend and backend tasks during full-stack project development and code reviews.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex real-world workflows like smart parking slot allocation and OTP checkout into clean modules.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Designing optimized SQL queries, MVC architectures, and debugging edge cases systematically.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Documenting APIs clearly and articulating technical decisions with peers and mentors.",
  },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Smart Vehicle Parking Management System (ParkMate)",
    description:
      "Developed a smart parking management application with user authentication, parking slot management, and an admin dashboard.",
    techTags: [
      "Java",
      "Spring Boot",
      "Servlets",
      "JSP",
      "React.js",
      "JDBC",
      "MySQL",
    ],
    links: {
      github: "https://github.com/bennesangeeta-art",
      demo: "https://smart-parking-system-murex.vercel.app/",
    },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "E-Commerce Website (SmartWay)",
    description:
      "Developed an e-commerce platform with product listings, category filtering, shopping cart, checkout, payment gateway integration, and email OTP verification.",
    techTags: ["Java", "Servlets", "JSP", "MySQL", "HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/bennesangeeta-art",
      demo: "https://ecommerce-gmail-auth.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "project-three",
    number: "03",
    badge: null,
    title: "Food Order Delivery Application",
    description:
      "Developed a food ordering application that allows users to browse food items, manage their cart, and place orders.",
    techTags: ["Java", "Spring Boot", "React.js", "MySQL"],
    links: {
      github: "https://github.com/bennesangeeta-art",
      demo: "https://feastflow-food-delivery.vercel.app/",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    {
      name: "Full Stack Development Placement Training",
      issuer: "KodNest",
      icon: "🏅",
    },
    {
      name: "Full Stack Developer Internship",
      issuer: "KodNest",
      icon: "📜",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/sangeeta-benne-88a57827a/",
};

export const education = {
  degree: "B.E Computer Science & Engineering",
  institution: "Sharnbasva University, Kalaburagi, Karnataka",
  cgpa: "2021 - 2025",
  graduation: "2025",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · Spring Boot · React.js · SQL",
    "Building Scalable Full-Stack Web Applications",
  ],
  credential: "B.E Computer Science & Engineering",
  copyright: `© ${new Date().getFullYear()} SANGEETA BENNE | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

