import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem, LanguageItem } from '../types';

export const PERSONAL_INFO = {
  name: "Abrar Alasbahi",
  role: "Information Technology Graduate",
  location: "Taiz, Yemen",
  email: "alasbhiabrar@gmail.com",
  phone: "+967 772 996 116",
  cvPath: "/Abrar_Alasbahi_YemenSoft_CV.pdf",
  headline: "Building practical digital solutions and continuously developing my technical skills.",
  supportingText: "Information Technology graduate interested in software development, web technologies, databases, and emerging technologies. I enjoy turning ideas into practical digital projects and continuously improving my technical skills through hands-on learning.",
  aboutText: [
    "I am an Information Technology graduate with an interest in software development, web technologies, databases, mobile applications, and emerging technologies. I enjoy learning through practical projects and transforming ideas into useful digital solutions.",
    "I am currently building and improving projects that allow me to strengthen my technical skills and gain practical experience."
  ],
  targetCompanyNote: "Configured for professional review by software and tech organizations, including YemenSoft engineering standards."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Development",
    iconName: "Code2",
    skills: ["Flutter", "Java", "PHP", "C++", "C#", "SQL", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Technology & Concepts",
    iconName: "Cpu",
    skills: ["Web Development", "Mobile Application Development", "Databases", "Basic Networking", "Artificial Intelligence fundamentals"]
  },
  {
    title: "Tools & Productivity",
    iconName: "Wrench",
    skills: ["Microsoft Office", "Computer Skills"]
  },
  {
    title: "Professional & Soft Skills",
    iconName: "Users",
    skills: ["Communication", "Teamwork", "Ability to learn and develop", "Working under pressure"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "barur-accessories",
    name: "Barur Accessories",
    category: "E-commerce / Accessories Store",
    description: "A digital store application created for Barur Accessories to present products and provide a structured online shopping experience.",
    longDescription: "A practical e-commerce showcase application designed specifically for Barur Accessories. The app allows customers to browse categorized collections of accessories, view detailed item specs, and interact with an organized product catalog.",
    purpose: "Digitize product presentation for Barur Accessories through a clean, accessible mobile/web catalog platform.",
    contribution: "Created responsive catalog interfaces, structured Firebase database models for product listings, and developed intuitive navigation controls.",
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Lucide React", "Recharts", "WebAuthn / Passkeys", "Node.js", "Express.js", "Google GenAI SDK"],
    status: "Completed Demo",
    hasDatabase: true,
    githubUrl: "#",
    imagePlaceholderTitle: "Barur Accessories Store Showcase",
    imagePlaceholderSubtitle: "E-commerce Catalog & Item View Interface",
    wireframeFeatures: [
      "Product Catalog Grid with Category Filtering",
      "Detailed Item Modal & Specifications View",
      "Firebase Real-Time Product Management",
      "Responsive Layout for Mobile and Desktop"
    ]
  },
  {
    id: "al-hammadi-phone",
    name: "Al-Hammadi Phone",
    category: "Web Development / E-Commerce & Services",
    description: "Website for Al-Hammadi Phone store to display products such as iPads, phones, headphones, and accessories, alongside event setup services like kosha and DJ.",
    longDescription: "A website for Al-Hammadi Phone store to showcase products such as iPads, phones, headphones, and accessories, along with event organization services including koshas and DJ setups. Developed using PHP, HTML, CSS, JavaScript, and jQuery with a responsive design and an easy-to-use interface to organize products and services.",
    purpose: "Present Al-Hammadi Phone products and event management services through a clean, responsive web interface.",
    contribution: "Developed the website using PHP, HTML, CSS, JavaScript, and jQuery with responsive layouts and structured product/service organization.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "jQuery"],
    status: "Completed Demo",
    hasDatabase: false,
    githubUrl: "#",
    imagePlaceholderTitle: "Al-Hammadi Phone Website Interface",
    imagePlaceholderSubtitle: "Product Catalog & Event Services Showcase",
    wireframeFeatures: [
      "Product Catalog (iPads, Phones, Headphones & Accessories)",
      "Event Services Showcase (Koshas, DJ & Party Setup)",
      "Dynamic Interactivity with PHP, JavaScript & jQuery",
      "Fully Responsive Design & User-Friendly Interface"
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    position: "ICDL Instructor",
    organization: "Consulting and Development Center, University of Science and Technology",
    description: "Delivered ICDL training and supported learners in developing practical computer and digital skills."
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Information Technology",
    institution: "Taiz University – Al-Turbah Branch",
    graduationYear: "2024"
  },
  {
    degree: "General Secondary Education",
    institution: "Scientific Section",
    graduationYear: "Secondary Certificate"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { title: "English Language Diploma", type: "Diploma" },
  { title: "Secretarial Diploma (Windows, Word, Excel, PowerPoint, Outlook, Printing)", type: "Diploma" },
  { title: "Accounting Course (A)", type: "Course" },
  { title: "Practical Mobile Programming Course", type: "Course" },
  { title: "Human Development Course", type: "Course" },
  { title: "Web Design", type: "Course" }
];

export const LANGUAGES: LanguageItem[] = [
  { language: "Arabic", proficiency: "Native" },
  { language: "English", proficiency: "Good" }
];
