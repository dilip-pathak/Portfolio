// Project data for portfolio

const makePlaceholder = (title, color = '#38bdf8') =>
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%231e293b"/><circle cx="300" cy="170" r="48" fill="${encodeURIComponent(color)}" opacity="0.25"/><text x="300" y="250" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="%23f8fafc" text-anchor="middle">${encodeURIComponent(title)}</text><text x="300" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="%2394a3b8" text-anchor="middle">Enterprise Project</text></svg>`;

export const projectsData = [
    {
        id: 1,
        title: "MemexAI",
        description: "A full-stack SaaS-style Personal Knowledge Management application with AI-powered chat, document management, real-time file processing, and semantic search.",
        image: makePlaceholder("MemexAI", "#38bdf8"),
        technologies: ["React", "Node.js", "MongoDB", "Google AI", "Tailwind CSS"],
        demo: "https://memex-ai-gamma.vercel.app/",
        github: "https://github.com/Shubhashita/MemexAI"
    },
    {
        id: 2,
        title: "FinEZ – Finance & Tax Platform",
        description: "Delivered RESTful APIs supporting 10,000+ financial transactions, optimized MongoDB indexing reducing query latency by 25%, managed Redis queues for 1,000+ daily background tasks, and integrated AI-powered tax guidance with an automated WhatsApp bot.",
        image: makePlaceholder("FinEZ", "#34d399"),
        technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "WhatsApp Business API"],
        imagePosition: "62% center",
        imageScale: 1.08,
        demo: "#",
    },
    {
        id: 3,
        title: "SLATE",
        description: "Collaborative task board with customizable views for planning, organizing, and tracking work.",
        image: makePlaceholder("SLATE", "#818cf8"),
        technologies: ["React", "Node.js", "Express.js", "Tailwind CSS"],
        demo: "https://todo-board-frontend-beta.vercel.app/",
        github: "https://github.com/Shubhashita/todo_board-frontend"
    },
    {
        id: 4,
        title: "QuizQuest",
        description: "Dynamic quiz platform where users create, take, and evaluate quizzes in real time.",
        image: makePlaceholder("QuizQuest", "#fbbf24"),
        technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
        demo: "https://quizquest-381dc.web.app",
        github: "https://github.com/Shubhashita/QuizQuest"
    },
    {
        id: 5,
        title: "Airline Management System",
        description: "Desktop system for flight scheduling, reservations, and ticketing with a MySQL-backed workflow.",
        image: makePlaceholder("Airline Management", "#f43f5e"),
        technologies: ["Java", "Java Swing", "MySQL", "MySQL Workbench"],
        demo: "#",
        github: "https://github.com/Shubhashita/Airline-Management-System"
    },
    {
        id: 6,
        title: "Portfolio",
        description: "Responsive personal site showcasing projects and skills with smooth motion and clean interaction.",
        image: makePlaceholder("Portfolio", "#a855f7"),
        technologies: ["React", "JavaScript", "CSS3"],
        github: "https://github.com/Shubhashita/Portfolio"
    },
];
