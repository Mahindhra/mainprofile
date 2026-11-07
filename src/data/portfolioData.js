export const personalInfo = {
  fullName: "DODDI MAHINDHRA",
  shortName: "Mahindhra",
  title: "Aspiring Software Developer",
  location: "Visakhapatnam, Andhra Pradesh, India",
  email: "mahimahindhra000@gmail.com",
  phone: "+91 6302827360",
  githubUsername: "Mahindhra",
  githubUrl: "https://github.com/Mahindhra",
  linkedinUrl: "#", // Add real LinkedIn URL when available
  avatar: "/images/mahindhra-portrait.jpg",
  resumePath: "/resume.pdf",

  hero: {
    greeting: "Hello, I'm Mahindhra.",
    headline: "An aspiring developer building tomorrow, one line of code at a time.",
    supportingText: "Exploring software development through Java, Python, web technologies, databases, and continuous learning.",
    badge: "Open to Learning & New Opportunities",
    tags: ["Java", "Python (Fundamentals)", "Web Development", "MySQL"]
  },

  about: {
    heading: "How my journey began.",
    paragraphs: [
      "I'm DODDI MAHINDHRA, an aspiring software developer from Visakhapatnam. My interest in technology motivates me to explore programming, understand how software works, and continuously improve my skills.",
      "I enjoy learning through practical exercises, experimenting with technologies, and working on ideas that can solve real-world problems.",
      "My goal is to grow as a software developer and contribute to meaningful software solutions."
    ],
    stickyNotes: [
      { text: "Always learning.", color: "#FFD23F", rotation: -3 },
      { text: "Problem-solving mindset.", color: "#9FD3FF", rotation: 2 },
      { text: "Building through practice.", color: "#B7A2FF", rotation: -2 },
      { text: "Curiosity drives progress.", color: "#FF6B4A", rotation: 4 }
    ]
  }
};

export const journeyStops = [
  {
    id: "school",
    category: "School Education",
    title: "M.N.R. High School",
    location: "Andhra Pradesh, India",
    date: "Secondary Education",
    score: "SSC: 97%",
    description: "Built strong mathematical, logical, and analytical foundations, graduating with a high score of 97%.",
    icon: "GraduationCap",
    accent: "#FFD23F",
    skillsLearned: ["Mathematics", "Logical Reasoning", "Analytical Thinking", "Science Basics"]
  },
  {
    id: "degree",
    category: "Undergraduate Education",
    title: "Aditya Degree & PG College",
    qualification: "Bachelor of Science (B.Sc.) – MECs",
    location: "Visakhapatnam, India",
    date: "Graduated",
    score: "CGPA: 7.5",
    description: "Specialized in Mathematics, Electronics, and Computer Science (MECs), bridging theoretical computing concepts with hands-on labs.",
    icon: "BookOpen",
    accent: "#2F7FD8",
    skillsLearned: ["Core Computer Science", "Electronics & Circuits", "Higher Mathematics", "Algorithmic Logic"]
  },
  {
    id: "tech-learning",
    category: "Technical Foundation",
    title: "Core Technologies & Systems",
    location: "Self & Academic Labs",
    date: "Ongoing Learning",
    description: "Mastered fundamental concepts in Object-Oriented Java, C data structures, Python fundamentals, front-end web markup, and relational databases.",
    icon: "Code2",
    accent: "#4F9E4A",
    skillsLearned: ["Java OOP", "C Programming", "Python Fundamentals", "HTML/CSS/JS", "SQL & MySQL"]
  },
  {
    id: "aws-internship",
    category: "Internship",
    title: "AWS Cloud Computing",
    organization: "Adhoc Network",
    date: "Short-Term Internship",
    description: "Completed a short-term internship and gained practical exposure to Amazon Web Services (AWS) cloud computing concepts, virtualization, and infrastructure architecture.",
    icon: "Cloud",
    accent: "#FF6B4A",
    skillsLearned: ["Cloud Fundamentals", "AWS Overview", "Storage & Compute", "Cloud Architecture"]
  },
  {
    id: "aiml-internship",
    category: "Internship",
    title: "Artificial Intelligence & Machine Learning",
    organization: "ULearn",
    date: "Long-Term Internship",
    description: "Completed a long-term internship gaining practical exposure to Artificial Intelligence and Machine Learning concepts, data manipulation, and model fundamentals.",
    icon: "Cpu",
    accent: "#B7A2FF",
    skillsLearned: ["AI Concepts", "Machine Learning Basics", "Data Intuition", "Algorithm Workflows"]
  },
  {
    id: "hackathon",
    category: "Practical Challenge",
    title: "Android Development Hackathon",
    organization: "Intensive Hackathon",
    date: "30 Sept 2024 – 04 Oct 2024",
    description: "Recognized for outstanding participation in an intensive multi-day hackathon focused on Android development, live project implementation, and real-time problem solving.",
    icon: "Trophy",
    accent: "#FFD23F",
    skillsLearned: ["Android Lifecycle", "XML Layouts", "Collaborative Debugging", "Sprint Delivery"]
  },
  {
    id: "mca-pursuing",
    category: "Advanced Studies (Pursuing)",
    title: "Master of Computer Applications (MCA)",
    organization: "Aditya Degree & PG College, Gopalapatnam",
    date: "Currently Pursuing",
    description: "Deepening knowledge in advanced software engineering, system architecture, database management, and modern application development.",
    icon: "Sparkles",
    accent: "#2F7FD8",
    skillsLearned: ["Advanced Software Engineering", "Full-Stack Development", "System Design", "Enterprise Applications"]
  }
];

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    subtitle: "Core algorithmic & logic development",
    skills: [
      { name: "Java", level: "Core Foundations", description: "OOP concepts, classes, inheritance, polymorphism, collections, multithreading basics", icon: "Coffee" },
      { name: "C", level: "Foundational", description: "Structured programming, pointers, memory management concepts, algorithms", icon: "Cpu" },
      { name: "Python", level: "Fundamentals", description: "Syntax, data structures, scripting, clean problem-solving fundamentals", icon: "Terminal" }
    ]
  },
  {
    id: "frontend",
    title: "Web Technologies",
    subtitle: "Responsive, accessible user interfaces",
    skills: [
      { name: "HTML5", level: "Semantic Markup", description: "Semantic web structure, accessibility tags, modern document standards", icon: "FileCode" },
      { name: "CSS3", level: "Styling & Responsive", description: "Flexbox, Grid, CSS animations, responsive layouts, modern design tokens", icon: "Palette" },
      { name: "JavaScript", level: "Core & ES6+", description: "DOM manipulation, asynchronous fetch, events, modern ES6+ patterns", icon: "Zap" },
      { name: "XML", level: "Markup & Data", description: "Data interchange schemas, Android UI layout definitions, configuration files", icon: "Layers" }
    ]
  },
  {
    id: "database",
    title: "Database Technologies",
    subtitle: "Data structuring & relational querying",
    skills: [
      { name: "SQL", level: "Relational Queries", description: "DDL, DML, relational joins, grouping, indexing, and data constraints", icon: "Database" },
      { name: "MySQL", level: "Schema Design", description: "Relational table modeling, foreign keys, query optimization, database administration", icon: "Server" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    subtitle: "Development workflow & environments",
    skills: [
      { name: "Git", level: "Version Control", description: "Commit history, branching strategies, staging, diff tracking", icon: "GitBranch" },
      { name: "GitHub", level: "Collaboration", description: "Remote repository hosting, PRs, issue tracking, project showcases", icon: "Github" },
      { name: "Apache Tomcat", level: "Web Server", description: "Java servlet execution, local server hosting, web application deployment", icon: "HardDrive" },
      { name: "MS Office", level: "Productivity", description: "Documentation, spreadsheet analysis, project presentations, report generation", icon: "FileText" }
    ]
  },
  {
    id: "soft-skills",
    title: "Professional & Soft Skills",
    subtitle: "Collaborative and personal strengths",
    skills: [
      { name: "Communication", level: "Certified (Pearson MePro)", description: "Clear articulation of ideas, technical reporting, cross-functional discussions", icon: "MessageSquare" },
      { name: "Team Collaboration", level: "Practiced", description: "Coordinating peer tasks, project synchronization, positive group dynamics", icon: "Users" },
      { name: "Time Management", level: "Disciplined", description: "Prioritizing milestones, meeting hackathon deadlines, structured study schedules", icon: "Clock" },
      { name: "Problem Solving", level: "Analytical", description: "Breaking complex programming hurdles down into logical, testable steps", icon: "Brain" },
      { name: "Adaptability", level: "Continuous Learner", description: "Quickly learning emerging frameworks, tools, and unfamiliar concepts", icon: "Repeat" }
    ]
  }
];

export const projects = [
  {
    id: "android-hackathon",
    title: "Android Development Hackathon Challenge",
    type: "Hackathon Project & Challenge",
    date: "30 Sept 2024 – 04 Oct 2024",
    status: "Completed & Recognized",
    tagline: "Intensive 5-day mobile development sprint tackling real-time problem-solving challenges.",
    description: "Participated in an intensive Android development hackathon from 30 September 2024 to 04 October 2024. Focused on Android application architecture, UI design with XML, Java/Kotlin mobile logic, and live problem-solving challenges under strict deadlines. Recognized for outstanding participation and dedication in all live projects.",
    focus: "Practical exposure to Android development lifecycle, mobile UI/UX, and rapid debugging.",
    technologies: ["Android", "Java", "XML", "Mobile UI", "Git"],
    highlights: [
      "Worked on live project challenges under competitive hackathon conditions",
      "Implemented mobile views and lifecycle handlers",
      "Collaborated with peers to debug and deliver functional solutions on schedule",
      "Honored with an official certificate of outstanding participation"
    ],
    githubUrl: null, // Only active when user adds link
    liveUrl: null,
    badgeColor: "#FFD23F"
  },
  {
    id: "apsrtc-feedback-system",
    title: "Smart APSRTC Passenger Complaint & Feedback System",
    type: "Academic Project (In Progress)",
    date: "In Progress / Concept Stage",
    status: "In Progress",
    tagline: "Digital grievance and feedback architecture designed for public transportation convenience.",
    description: "An academic project concept currently in progress, focused on designing a structured digital feedback and complaint management solution for state road transport passengers. Focuses on clean database schemas, categorized grievance tracking, and transparent status updates.",
    focus: "Database schema design, CRUD workflows, and structured user input validation.",
    technologies: ["Java", "MySQL", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Structured complaint category categorization (bus timing, ticketing, comfort)",
      "Relational database schema modeling with MySQL for ticket and feedback tracking",
      "Focus on accessible, intuitive UI for diverse passenger demographics",
      "Currently actively developing core modules as an academic project"
    ],
    githubUrl: null,
    liveUrl: null,
    badgeColor: "#2F7FD8"
  }
];

export const internships = [
  {
    id: "aws-adhoc",
    role: "AWS Cloud Computing Intern",
    organization: "Adhoc Network",
    duration: "Short-Term Internship",
    description: "Completed a short-term internship gaining foundational practical exposure to Amazon Web Services (AWS) cloud computing concepts, virtualization, and cloud infrastructure.",
    learnings: [
      "Understanding core cloud service models (IaaS, PaaS, SaaS)",
      "Foundational exposure to compute (EC2), storage (S3), and security fundamentals",
      "Explored scalable web hosting concepts and cloud benefits"
    ],
    accent: "#FF6B4A",
    icon: "Cloud"
  },
  {
    id: "aiml-ulearn",
    role: "Artificial Intelligence & Machine Learning Intern",
    organization: "ULearn",
    duration: "Long-Term Internship",
    description: "Completed an in-depth long-term internship gaining practical exposure to Artificial Intelligence and Machine Learning concepts, data preprocessing foundations, and algorithm pipelines.",
    learnings: [
      "Gained strong conceptual understanding of machine learning models and supervised learning",
      "Worked with data representations, feature understanding, and evaluation basics",
      "Studied how AI solutions are architected to solve real-world pattern-recognition problems"
    ],
    accent: "#B7A2FF",
    icon: "Cpu"
  }
];

export const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Aditya Degree & PG College",
    location: "Gopalapatnam, Visakhapatnam, India",
    status: "Currently Pursuing",
    note: "Advanced software engineering, database management, and computing paradigms.",
    current: true
  },
  {
    degree: "Bachelor of Science (B.Sc.) – MECs",
    institution: "Aditya Degree & PG College",
    location: "Visakhapatnam, Andhra Pradesh, India",
    score: "CGPA: 7.5",
    status: "Graduated",
    note: "Mathematics, Electronics, Computer Science.",
    current: false
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "M.N.R. High School",
    location: "Andhra Pradesh, India",
    score: "Percentage: 97%",
    status: "Completed",
    note: "High academic distinction with 97% aggregate.",
    current: false
  }
];

export const certifications = [
  {
    title: "Microsoft Office",
    category: "Productivity & Documentation",
    issuer: "Certified in MS Office",
    description: "Demonstrated proficiency in spreadsheets, structured documentation, and office productivity tools.",
    icon: "FileSpreadsheet",
    badge: "Office Suite"
  },
  {
    title: "C Programming Language",
    category: "Core Computer Science",
    issuer: "C Language Certification",
    description: "Validated competencies in procedural programming, pointers, structured algorithms, and memory concepts.",
    icon: "Binary",
    badge: "Algorithms & Logic"
  },
  {
    title: "Pearson MePro — Communication Skills",
    category: "Professional Communication",
    issuer: "Pearson MePro",
    description: "International standard certification in spoken, written, and workplace English communication proficiency.",
    icon: "Award",
    badge: "Communication"
  }
];

export const achievements = [
  {
    title: "Android Development Hackathon",
    date: "30 Sept – 04 Oct 2024",
    category: "Technical Recognition",
    description: "Recognized for outstanding participation and technical dedication in an intensive 5-day hackathon solving live development challenges.",
    icon: "Trophy",
    color: "#FFD23F"
  },
  {
    title: "Team Project Coordination & Leadership",
    date: "Academic & Collaborative",
    category: "Leadership",
    description: "Coordinated team projects, distributed tasks according to individual strengths, motivated members, and ensured timely delivery of milestones.",
    icon: "Users",
    color: "#2F7FD8"
  },
  {
    title: "Community Event Organization",
    date: "Campus Engagement",
    category: "Campus & Community",
    description: "Actively participated in organizing community-focused and campus events to enhance collaborative engagement and student participation.",
    icon: "HeartHandshake",
    color: "#4F9E4A"
  },
  {
    title: "Financial Literacy & Market Analysis",
    date: "Extracurricular",
    category: "Analytical Skills",
    description: "Actively engaged in financial literacy, trading-related workshops, and market analytical exercises, developing strategic risk-assessment abilities.",
    icon: "TrendingUp",
    color: "#FF6B4A"
  }
];

export const interests = [
  {
    id: "piano",
    title: "Playing Piano",
    category: "Music & Melody",
    tagline: "Harmony & Pattern Recognition",
    description: "Playing piano sharpens rhythmic discipline, muscle memory, and the appreciation for harmonious compositions — much like crafting clean, orchestrated code.",
    color: "#13233A",
    icon: "Music",
    interaction: "Click to play a harmonious chord"
  },
  {
    id: "cooking",
    title: "Cooking",
    category: "Culinary Creativity",
    tagline: "Experimentation & Precision",
    description: "Cooking teaches precision, timing, and how different ingredients synergize to create something satisfying — mirroring iterative software development.",
    color: "#FF6B4A",
    icon: "Utensils",
    interaction: "Sizzle with flavor"
  },
  {
    id: "painting",
    title: "Painting",
    category: "Visual Arts",
    tagline: "Color, Balance & Emotion",
    description: "Painting allows free expression of colors, lighting, and depth, directly nurturing my UI/UX intuition for digital interfaces and web design.",
    color: "#B7A2FF",
    icon: "Palette",
    interaction: "Splash of vibrant color"
  },
  {
    id: "drawing",
    title: "Drawing",
    category: "Sketching & Detail",
    tagline: "Structure & Attention to Detail",
    description: "Freehand drawing trains the eye to notice subtle contours and proportions, helping me think visually before turning ideas into software.",
    color: "#4F9E4A",
    icon: "PenTool",
    interaction: "Sketching concepts"
  }
];
