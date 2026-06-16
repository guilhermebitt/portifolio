import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-data-BF5V7x64.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ThemeContext = (0, import_react.createContext)(void 0);
var STORAGE_KEY = "portfolio-theme";
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
		if (stored === "light" || stored === "dark") setTheme(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		root.classList.remove("dark", "light");
		root.classList.add(theme);
		localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);
	const toggleTheme = () => setTheme((t) => t === "dark" ? "light" : "dark");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggleTheme
		},
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
var project_cafedvovo_default = "/assets/project-cafedvovo-BbsnLO_O.png";
var project_thegame_default = "/assets/project-thegame-_SrleBcz.png";
var project_maq_default = "/assets/project-maq-D3tiLz0w.png";
var project_bmw_default = "/assets/project-bmw-CCcIq2Tk.png";
/**
* Central source of truth for portfolio content.
*/
var personal = {
	name: "Guilherme Bittencourt",
	role: "Software Developer & Information Systems Student",
	location: "Conselheiro Lafaiete - MG, Brazil",
	email: "guilherme.assis.bittencourt@gmail.com",
	shortBio: "Information Systems student and aspiring software developer focused on building modern web applications. Passionate about technology, problem-solving, and continuously learning new tools and development practices.",
	longBio: "I'm an Information Systems student with a strong interest in software development, especially web technologies. I have experience with Python, JavaScript, Git, GitHub, front and backend development, and I'm constantly expanding my knowledge through personal projects and continuous learning. I enjoy transforming ideas into functional applications, improving my programming skills, and exploring new technologies. Outside of development, I enjoy playing guitar, drawing, listening to indie and alternative music, and tackling technical challenges through games and personal projects.",
	resumeUrl: "#",
	socials: {
		github: "https://github.com/guilhermebitt",
		linkedin: "https://www.linkedin.com/in/guilherme-bitt/",
		instagram: "https://www.instagram.com/gui.a.bitt/",
		email: "guilherme.assis.bittencourt@gmail.com"
	}
};
var technologies = [
	{
		name: "HTML & CSS",
		category: "Markup & Styling"
	},
	{
		name: "JavaScript",
		category: "Language"
	},
	{
		name: "TypeScript",
		category: "Language"
	},
	{
		name: "React",
		category: "Frontend"
	},
	{
		name: "Python",
		category: "Language"
	},
	{
		name: "PHP",
		category: "Language"
	},
	{
		name: "Git & GitHub",
		category: "Tooling"
	},
	{
		name: "MySQL",
		category: "Database"
	}
];
var projects = [
	{
		id: "cafedvovo",
		name: "CafeDVovo",
		description: "Integrated ERP platform for managing products, sales, logistics, employees, and business operations in a coffee shop environment.",
		tags: [
			"JavaScript",
			"MySQL",
			"PHP"
		],
		github: "https://github.com/watdell/REP0133CafeDvovo",
		demo: "https://cafedvovo.infinityfreeapp.com/",
		cover: project_cafedvovo_default
	},
	{
		id: "the",
		name: "The Game",
		description: "Roguelike RPG built with React, combining procedural exploration, challenging encounters, and permanent progression systems.",
		tags: [
			"React",
			"TypeScript",
			"Node.JS"
		],
		github: "https://github.com/guilhermebitt/the-react",
		demo: "https://the-react-development.vercel.app/",
		cover: project_thegame_default
	},
	{
		id: "makeaquestion",
		name: "MakeAQuestion",
		description: "Social discussion platform where users can create posts, ask questions, join communities, and engage in threaded conversations.",
		tags: [
			"React",
			"PHP",
			"RESTFull API"
		],
		github: "https://github.com/coffee-and-code-enterprise/make-a-question",
		demo: "https://make-a-question-tau.vercel.app/",
		cover: project_maq_default
	},
	{
		id: "bmw",
		name: "BMW M3 Landing Page",
		description: "High-performance automotive landing page inspired by BMW, featuring modern design, immersive visuals, and responsive user experience.",
		tags: [
			"Framer",
			"Responsive Design",
			"UI/UX"
		],
		github: "#",
		demo: "https://miraculous-sheet-589134.framer.app/",
		cover: project_bmw_default
	}
];
var timeline = [
	{
		period: "2026 — 2029",
		title: "B.Sc. in Information Systems",
		organization: "IFMG - Ouro Branco Campus",
		description: "Studying Information Systems with a focus on software development, web technologies, databases, and software engineering principles.",
		kind: "education"
	},
	{
		period: "2024 — 2026",
		title: "FullStack Developer (Freelance)",
		organization: "Independent",
		description: "Building responsive landing pages, dashboards, systems and designs for early-stage startups.",
		kind: "work"
	},
	{
		period: "2025 — 2025",
		title: "WEB Programer Course",
		organization: "SENAC",
		description: "Training in web development fundamentals, covering HTML, CSS, JavaScript, databases, and the creation of responsive web applications.",
		kind: "course"
	},
	{
		period: "2023 — 2025",
		title: "IT Technician",
		organization: "SENAC",
		description: "Completed technical training in computer hardware, operating systems, networking, software installation, and IT support fundamentals.",
		kind: "education"
	}
];
//#endregion
export { timeline as a, technologies as i, personal as n, useTheme as o, projects as r, ThemeProvider as t };
