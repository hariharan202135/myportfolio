export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  liveDemoUrl?: string | null;
  githubUrl?: string | null;
  hasLiveDemo: boolean;
  category: 'Full-Stack' | 'AI/ML' | 'Computer Vision';
  number: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  locationType: 'Onsite' | 'Remote' | 'Virtual';
  period: string;
  bullets: string[];
  track?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  details: string;
  badgeType: 'Elite+Silver' | 'Harvard' | 'University' | 'IBM';
  score?: string;
}

export interface CertificateDoc {
  id: string;
  title: string;
  issuer: string;
  category: 'Data Science & AI' | 'AI & Generative Tools' | 'Software Development' | 'Data & Office Tools' | 'Security & Technology';
  issueDate: string;
  code?: string;
  pdfPath: string;
}

export const PERSONAL_INFO = {
  name: "N HARIHARAN",
  initials: "NH",
  title: "Computer Science & Engineering Student | AI/ML & Full-Stack Developer",
  headline: "Building Intelligent Software That Solves Real Problems.",
  supportingText: "Computer Science and Engineering student passionate about Artificial Intelligence, Machine Learning and Full-Stack Development. I build practical applications that combine intelligent systems with engaging user experiences.",
  email: "hariharannandha2005@gmail.com",
  phone: "+91 9894995725",
  location: "The Nilgiris, India",
  linkedin: "http://www.linkedin.com/in/n-hariharan-9521562a4",
  github: "https://github.com/hariharan202135",
  resumePath: "/resume/N_Hariharan_Resume_Final_October.pdf",
  education: {
    degree: "B.E. Computer Science & Engineering",
    institution: "Gnanamani College of Technology",
    location: "Namakkal, India",
    cgpa: "8.05",
    graduationYear: "Expected 2027"
  },
  aboutText: [
    "I am a Computer Science and Engineering student with hands-on experience in Python, Machine Learning, Flask and Web Development.",
    "I have developed AI-powered and full-stack applications through academic projects and internships.",
    "I am interested in software development, Artificial Intelligence, Machine Learning and building useful real-world applications."
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    iconName: "Code2",
    description: "Core software engineering & algorithmic problem solving",
    skills: [
      { name: "C" },
      { name: "Python" },
      { name: "Java" }
    ]
  },
  {
    title: "Web Development",
    iconName: "Globe",
    description: "Modern responsive web applications & lightweight backend APIs",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Flask" },
      { name: "Streamlit" }
    ]
  },
  {
    title: "AI / Machine Learning",
    iconName: "Brain",
    description: "Predictive model training, NLP, and computer vision classification",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "NLP" },
      { name: "Data Preprocessing" },
      { name: "Model Training" },
      { name: "Exploratory Data Analysis (EDA)" }
    ]
  },
  {
    title: "Tools & Workflow",
    iconName: "Wrench",
    description: "Version control, collaborative development & modern IDEs",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Data Analytics Intern",
    company: "Crescent Infotech",
    locationType: "Onsite",
    period: "Jul 2025 – Aug 2025",
    bullets: [
      "Performed data collection, cleaning, and exploratory data analysis (EDA) on structured datasets.",
      "Worked on a cloud storage security project focused on data integrity and storage verification.",
      "Applied data analysis techniques to identify patterns and improve data reliability."
    ]
  },
  {
    id: "exp-2",
    role: "Full Stack Development Intern",
    company: "BucketStudy",
    locationType: "Remote",
    period: "Dec 2025 – Jan 2026",
    bullets: [
      "Developed responsive web pages using HTML, CSS, and JavaScript.",
      "Assisted in backend development and database integration.",
      "Tested and debugged applications to improve performance."
    ]
  },
  {
    id: "exp-3",
    role: "AI Builder Intern",
    company: "MirAI School of Technology",
    locationType: "Virtual",
    period: "Jun 2026 – Aug 2026",
    track: "AI Builder",
    bullets: [
      "Developed AI-powered applications using Python, Streamlit, and the Gemini API.",
      "Built interactive AI applications, including a stateful chatbot and AI-powered tools.",
      "Developed Brain Battle Arena, an AI-powered 1v1 multiplayer quiz platform using Streamlit, Gemini AI, and Supabase."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "tic-tac-toe",
    number: "01",
    name: "Online Tic-Tac-Toe Game",
    subtitle: "Interactive Web Game",
    description: "An interactive online Tic-Tac-Toe game.",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    features: [
      "Interactive gameplay",
      "Turn-based logic",
      "Score tracking",
      "Responsive web interface"
    ],
    liveDemoUrl: "https://tic-tac-toe-game-for-web.netlify.app/",
    githubUrl: "https://github.com/hariharan202135",
    hasLiveDemo: true,
    category: "Full-Stack"
  },
  {
    id: "weather-app",
    number: "02",
    name: "Weather App",
    subtitle: "Real-Time Weather Application",
    description: "A weather application that displays weather information.",
    technologies: ["JavaScript", "Weather API", "HTML", "CSS", "Netlify"],
    features: [
      "Real-time weather data",
      "Location search",
      "Temperature & conditions display",
      "Responsive UI"
    ],
    liveDemoUrl: "https://weatherreportweb.netlify.app/",
    githubUrl: "https://github.com/hariharan202135",
    hasLiveDemo: true,
    category: "Full-Stack"
  },
  {
    id: "lookify",
    number: "03",
    name: "Lookify",
    subtitle: "AI-Based Image Recognition Web Application",
    description: "An AI-powered image recognition application that performs object classification using image upload and live camera input.",
    technologies: ["Python", "Flask", "EfficientNetB0", "Deep Learning"],
    features: [
      "Image upload",
      "Live camera input",
      "Object classification",
      "AI-powered predictions",
      "Flask backend"
    ],
    liveDemoUrl: null,
    githubUrl: "https://github.com/hariharan202135",
    hasLiveDemo: false,
    category: "Computer Vision"
  },
  {
    id: "thinkspark",
    number: "04",
    name: "ThinkSpark",
    subtitle: "Brain Testing Web Game",
    description: "An interactive brain-testing web game designed around memory, focus and reasoning challenges.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite", "JSON", "Render"],
    features: [
      "Memory challenges",
      "Focus challenges",
      "Reasoning challenges",
      "Responsive gameplay",
      "User data management",
      "Progress tracking"
    ],
    liveDemoUrl: "https://thinkspark-1.onrender.com/",
    githubUrl: "https://github.com/hariharan202135",
    hasLiveDemo: true,
    category: "Full-Stack"
  },
  {
    id: "placeme-ai",
    number: "05",
    name: "PlaceMe AI",
    subtitle: "AI Placement Preparation SaaS Platform",
    description: "An AI-powered SaaS placement preparation platform featuring placement-focused preparation tools.",
    technologies: ["Next.js", "React", "AI / LLM", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "AI-powered interview prep",
      "Placement-focused tools",
      "Interactive dashboard",
      "SaaS platform architecture"
    ],
    liveDemoUrl: "https://place-me-ai.vercel.app/dashboard",
    githubUrl: "https://github.com/hariharan202135",
    hasLiveDemo: true,
    category: "AI/ML"
  },
  {
    id: "brain-battle-arena",
    number: "06",
    name: "MirAI Capstone — Brain Battle Arena",
    subtitle: "AI-Powered 1v1 Multiplayer Quiz Platform",
    description: "An AI-powered 1v1 multiplayer quiz platform built using Streamlit, Gemini AI, and Supabase. Players compete in shared AI-generated quizzes and view their performance results.",
    technologies: ["Python", "Streamlit", "Gemini AI", "Supabase"],
    features: [
      "1v1 multiplayer competitions",
      "AI-generated quiz questions",
      "Supabase real-time database",
      "Performance analytics dashboard"
    ],
    liveDemoUrl: "https://brainbattlearenbyhari.streamlit.app/",
    githubUrl: "https://github.com/hariharan202135/mirai_capstone_brain_battle_arena",
    hasLiveDemo: true,
    category: "AI/ML"
  }
];

export const ACHIEVEMENTS: Certification[] = [
  {
    id: "nptel-cloud",
    title: "NPTEL Cloud Computing",
    issuer: "NPTEL",
    details: "Elite + Silver Certification — Scored 76% in Performance Matrix",
    badgeType: "Elite+Silver",
    score: "76%"
  },
  {
    id: "cs50x",
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    details: "Accredited by Harvard University",
    badgeType: "Harvard"
  },
  {
    id: "elements-ai",
    title: "Elements of AI",
    issuer: "University of Helsinki & MinnaLearn",
    details: "2 ECTS Credits Accredited Online Course",
    badgeType: "University"
  },
  {
    id: "ibm-python-ds",
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class / Powered by IBM",
    details: "Verified Course Completion (PY0101EN)",
    badgeType: "IBM"
  }
];

export const CERTIFICATE_DOCS: CertificateDoc[] = [
  {
    id: "ibm-python-ds",
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class / IBM Developer Skills Network",
    category: "Data Science & AI",
    issueDate: "July 25, 2025",
    code: "PY0101EN",
    pdfPath: "/certificates/IBM_Python_101_Data_Science.pdf"
  },
  {
    id: "helsinki-elements-ai",
    title: "Elements of AI",
    issuer: "University of Helsinki & MinnaLearn",
    category: "Data Science & AI",
    issueDate: "July 1, 2023",
    code: "641t19snvev",
    pdfPath: "/certificates/University_Helsinki_Elements_of_AI.pdf"
  },
  {
    id: "kaggle-intro-ml",
    title: "Intro to Machine Learning",
    issuer: "Kaggle Learn",
    category: "Data Science & AI",
    issueDate: "January 13, 2025",
    pdfPath: "/certificates/Kaggle_Intro_Machine_Learning.pdf"
  },
  {
    id: "letsupgrade-ds-python",
    title: "Data Science with Python",
    issuer: "LetsUpgrade (in collab with NSDC & GDG MAD)",
    category: "Data Science & AI",
    issueDate: "February 19, 2025",
    code: "LUEDSFEEB12517",
    pdfPath: "/certificates/LetsUpgrade_Data_Science_Python.pdf"
  },
  {
    id: "simplilearn-ds",
    title: "Free Data Scientist Course",
    issuer: "Simplilearn / SkillUp",
    category: "Data Science & AI",
    issueDate: "July 19, 2025",
    code: "8653370",
    pdfPath: "/certificates/Simplilearn_Free_Data_Scientist.pdf"
  },
  {
    id: "letsupgrade-chatgpt",
    title: "ChatGPT Bootcamp",
    issuer: "LetsUpgrade (in collab with NSDC & GDG MAD)",
    category: "AI & Generative Tools",
    issueDate: "March 2, 2025",
    code: "LUECGPTFEB125766",
    pdfPath: "/certificates/LetsUpgrade_ChatGPT_Bootcamp.pdf"
  },
  {
    id: "simplilearn-prompt-eng",
    title: "Introduction to Prompt Engineering",
    issuer: "Simplilearn / SkillUp",
    category: "AI & Generative Tools",
    issueDate: "January 11, 2026",
    code: "9704703",
    pdfPath: "/certificates/Simplilearn_Prompt_Engineering.pdf"
  },
  {
    id: "kaggle-python",
    title: "Python Programming",
    issuer: "Kaggle Learn",
    category: "Software Development",
    issueDate: "January 12, 2025",
    pdfPath: "/certificates/Kaggle_Python.pdf"
  },
  {
    id: "greatlearning-java",
    title: "Java Programming",
    issuer: "Great Learning Academy",
    category: "Software Development",
    issueDate: "January 2025",
    code: "KIIYGGMV",
    pdfPath: "/certificates/GreatLearning_Java_Programming.pdf"
  },
  {
    id: "letsupgrade-github",
    title: "Git & GitHub Bootcamp",
    issuer: "LetsUpgrade (in collab with NSDC & GDG MAD)",
    category: "Software Development",
    issueDate: "March 5, 2025",
    code: "LUEGGMAR125198",
    pdfPath: "/certificates/LetsUpgrade_Git_GitHub_Bootcamp.pdf"
  },
  {
    id: "simplilearn-crypto",
    title: "Introduction to Cryptography for Beginners",
    issuer: "Simplilearn / SkillUp",
    category: "Security & Technology",
    issueDate: "October 8, 2025",
    code: "9127446",
    pdfPath: "/certificates/Simplilearn_Cryptography_Beginners.pdf"
  },
  {
    id: "simplilearn-excel",
    title: "Introduction to MS Excel",
    issuer: "Simplilearn / SkillUp",
    category: "Data & Office Tools",
    issueDate: "July 27, 2025",
    code: "8693540",
    pdfPath: "/certificates/Simplilearn_MS_Excel.pdf"
  },
  {
    id: "simplilearn-powerbi",
    title: "Power BI for Beginners",
    issuer: "Simplilearn / SkillUp",
    category: "Data & Office Tools",
    issueDate: "August 11, 2025",
    code: "8767421",
    pdfPath: "/certificates/Simplilearn_Power_BI.pdf"
  },
  {
    id: "letsupgrade-excel",
    title: "Excel Bootcamp",
    issuer: "LetsUpgrade (in collab with NSDC & GDG MAD)",
    category: "Data & Office Tools",
    issueDate: "February 23, 2025",
    code: "LUEEXLFEB125616",
    pdfPath: "/certificates/LetsUpgrade_Excel_Bootcamp.pdf"
  }
];
