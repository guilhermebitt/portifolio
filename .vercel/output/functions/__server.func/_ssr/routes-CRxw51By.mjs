import { o as __toESM } from "../_runtime.mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as timeline, n as projects, r as technologies, t as personal } from "./portfolio-data-C7lImfDF.mjs";
import { a as stringType, i as recordType, n as numberType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useTheme } from "./use-theme-Ds3qvJov.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-C0-ViIFV.mjs";
import { a as Linkedin, c as Github, d as Award, f as ArrowUp, i as Mail, l as ExternalLink, n as Sparkles, o as Instagram, r as Moon, s as GraduationCap, t as Sun, u as Briefcase } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CRxw51By.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
/** Accessible dark/light theme toggle. */
function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggleTheme,
		"aria-label": isDark ? "Switch to light theme" : "Switch to dark theme",
		className: "size-9 grid place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors",
		children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
	});
}
var NAV_LINKS = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Stack",
		href: "#stack"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Timeline",
		href: "#timeline"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "font-mono font-bold text-lg tracking-tighter text-foreground",
					children: [personal.name.split(" ")[0].toUpperCase(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "_"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "hover:text-primary transition-colors",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: personal.resumeUrl,
							className: "hidden sm:inline-flex px-4 py-1.5 rounded-full bg-foreground text-background text-xs font-bold tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors",
							children: "RESUME"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-label": "Toggle menu",
							"aria-expanded": open,
							className: "md:hidden size-9 grid place-items-center rounded-full border border-border text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-4 bg-current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-4 bg-current" })]
							})]
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border bg-background/95 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 py-4 flex flex-col gap-3 text-sm",
				children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "text-muted-foreground hover:text-primary transition-colors",
					children: link.label
				}, link.href))
			})
		})]
	});
}
var profile_default = "/assets/profile-CfrKol7a.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "pt-32 md:pt-40 pb-20 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-fade-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-mono tracking-widest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })]
							}), "AVAILABLE FOR NEW PROJECTS"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-primary text-sm uppercase tracking-widest font-semibold",
							children: [
								personal.name,
								" / ",
								personal.role
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-balance",
						children: [
							"Building software,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow",
								children: "learning endlessly."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted-foreground max-w-md mb-8 leading-relaxed",
						children: personal.shortBio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#projects",
							className: "px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all",
							children: "View Work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "px-8 py-3 rounded-lg border border-border-strong text-foreground font-semibold hover:bg-surface transition-colors",
							children: "Get in touch"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative animate-fade-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-primary/15 blur-3xl rounded-full pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative w-full aspect-square bg-surface rounded-2xl outline-1 -outline-offset-1 outline-foreground/10 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: profile_default,
						alt: `${personal.name} profile`,
						width: 1024,
						height: 1024,
						className: "w-full h-full object-cover"
					})
				})]
			})]
		})
	});
}
/**
* Adds a CSS class once the element scrolls into view.
* Used for subtle on-scroll fade-in animations.
*/
function useReveal(threshold = .15) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("reveal-visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold });
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);
	return ref;
}
/** Small heading used at the top of each section. */
function SectionTitle({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: useReveal(),
		className: "reveal mb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-sm font-mono text-primary flex items-center gap-4 tracking-widest uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-primary" }),
					" ",
					eyebrow
				]
			}),
			title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground max-w-2xl",
				children: description
			})
		]
	});
}
function About() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-20 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { eyebrow: "About" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "reveal grid md:grid-cols-5 gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: personal.longBio }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My goal is to grow as a product-minded engineer — shipping things that are reliable, fast, and genuinely useful for the people who use them." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
							label: "Education",
							value: "B.Sc. in Information Systems — In Progress"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
							label: "Currently",
							value: "Software Developer & IT Student"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
							label: "Based in",
							value: personal.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
							label: "Goal",
							value: "Junior Software Engineer"
						})
					]
				})]
			})]
		})
	});
}
function InfoBlock({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-l border-border pl-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-foreground font-medium",
			children: value
		})]
	});
}
function TechStack() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stack",
		className: "py-20 px-6 bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { eyebrow: "Core Stack" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				className: "reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
				children: technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:-translate-y-0.5 transition-all group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2",
						children: tech.category
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-foreground group-hover:text-primary transition-colors",
						children: tech.name
					})]
				}, tech.name))
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "py-20 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-end mb-12 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { eyebrow: "Recent Work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://github.com/guilhermebitt?tab=repositories",
					className: "text-xs sm:text-sm font-mono text-primary hover:underline whitespace-nowrap pb-1",
					children: "VIEW_ALL_REPOS →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-8",
				children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project }, project.id))
			})]
		})
	});
}
function ProjectCard({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		ref: useReveal(),
		className: "reveal group",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full aspect-[16/10] bg-surface rounded-2xl outline-1 -outline-offset-1 outline-foreground/5 mb-6 overflow-hidden group-hover:outline-primary/30 transition-all",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.cover,
					alt: project.name,
					loading: "lazy",
					width: 1280,
					height: 800,
					className: "w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 mb-3 flex-wrap",
				children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[10px] font-mono uppercase tracking-wider",
					children: tag
				}, tag))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold mb-2 group-hover:text-primary transition-colors",
				children: project.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm leading-relaxed mb-4",
				children: project.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 text-sm",
				children: [project.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.github,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" }), " Code"]
				}), project.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.demo,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" }), " Demo"]
				})]
			})
		]
	});
}
var ICONS = {
	work: Briefcase,
	education: GraduationCap,
	certification: Award,
	course: Sparkles
};
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "timeline",
		className: "py-20 px-6 bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Chronology",
				title: "A short timeline",
				description: "Education, experience, and the certifications shaping where I'm headed."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute left-4 md:left-5 top-2 bottom-2 w-px bg-border"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-10",
					children: timeline.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineRow, { item }, item.period + item.title))
				})]
			})]
		})
	});
}
function TimelineRow({ item }) {
	const Icon = ICONS[item.kind];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		ref: useReveal(),
		className: "reveal relative pl-14 md:pl-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-0 top-1 size-9 md:size-10 grid place-items-center rounded-full border border-border bg-card text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground",
				children: item.period
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 text-lg font-bold text-foreground",
				children: item.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-primary font-medium",
				children: item.organization
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground leading-relaxed",
				children: item.description
			})
		]
	});
}
var GitHubStatsSchema = objectType({
	username: stringType(),
	publicRepos: numberType(),
	followers: numberType(),
	stars: numberType(),
	contributionsLastYear: numberType(),
	topLanguages: arrayType(objectType({
		name: stringType(),
		percent: numberType()
	}))
});
var UserSchema = objectType({
	login: stringType(),
	public_repos: numberType(),
	followers: numberType()
});
var ReposSchema = arrayType(objectType({
	name: stringType(),
	stargazers_count: numberType(),
	languages_url: stringType()
}));
var LanguagesSchema = recordType(stringType(), numberType());
async function getUser(username) {
	const response = await fetch(`https://api.github.com/users/${username}`);
	return UserSchema.parse(await response.json());
}
async function getRepos(username) {
	const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
	return ReposSchema.parse(await response.json());
}
function getTotalStars(repos) {
	return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
}
async function getTopLanguages(repos) {
	const totals = {};
	await Promise.all(repos.map(async (repo) => {
		const response = await fetch(repo.languages_url);
		const languages = LanguagesSchema.parse(await response.json());
		Object.entries(languages).forEach(([lang, bytes]) => {
			totals[lang] = (totals[lang] || 0) + bytes;
		});
	}));
	const totalBytes = Object.values(totals).reduce((a, b) => a + b, 0);
	return Object.entries(totals).map(([name, bytes]) => ({
		name,
		percent: Math.round(bytes / totalBytes * 100)
	})).sort((a, b) => b.percent - a.percent).slice(0, 5);
}
async function getGitHubStats(username) {
	const [user, repos] = await Promise.all([getUser(username), getRepos(username)]);
	const stats = {
		username: user.login,
		publicRepos: user.public_repos,
		followers: user.followers,
		stars: getTotalStars(repos),
		contributionsLastYear: 0,
		topLanguages: await getTopLanguages(repos)
	};
	return GitHubStatsSchema.parse(stats);
}
/**
* GitHub overview — currently uses simulated data from portfolio-data.ts.
* Replace the hardcoded `githubStats` with a fetch to the GitHub REST API
* (e.g. https://api.github.com/users/{username}) and feed it into the same
* shape to go live.
*/
function GitHubSection() {
	const ref = useReveal();
	const [githubStats, setGitHubStats] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		getGitHubStats(new URL(personal.socials.github).pathname.replace(/^\//, "")).then(setGitHubStats).catch((error) => {
			console.error("Failed to load GitHub stats", error);
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "github",
		className: "py-20 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { eyebrow: "GitHub Activity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "reveal grid md:grid-cols-5 gap-6 items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2 rounded-2xl border border-border bg-card p-8 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-8 text-primary mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg font-bold",
							children: ["@", githubStats?.username ?? "loading..."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: "Snapshot of recent open-source activity."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/guilhermebitt",
						target: "_blank",
						rel: "noreferrer",
						className: "mt-6 inline-flex items-center gap-2 text-xs font-mono text-primary hover:underline",
						children: "VISIT_PROFILE →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3 grid grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Repositories",
							value: githubStats?.publicRepos ?? 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Followers",
							value: githubStats?.followers ?? 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Stars Earned",
							value: githubStats?.stars ?? 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Contributions / Yr",
							value: githubStats?.contributionsLastYear ?? 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-2 rounded-2xl border border-border bg-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4",
								children: "Top Languages"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: (githubStats?.topLanguages ?? []).map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-sm mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground font-medium",
										children: lang.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground font-mono",
										children: [lang.percent, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 w-full bg-secondary rounded-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-linear-to-r from-primary to-primary-glow rounded-full",
										style: { width: `${lang.percent}%` }
									})
								})] }, lang.name))
							})]
						})
					]
				})]
			})]
		})
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-3xl font-extrabold text-foreground",
			children: value.toLocaleString()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-2",
			children: label
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ContactFormSchema = objectType({
	name: stringType().min(2).max(100),
	email: stringType().email(),
	message: stringType().min(10).max(5e3)
});
var submitContactForm = createServerFn({ method: "POST" }).validator((data) => ContactFormSchema.parse(data)).handler(createSsrRpc("b02c23f871ea909bb64c037cd6c2b9f091be94937cf2f19dd4a367cea69977b3"));
function Contact() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const sendContactForm = useServerFn(submitContactForm);
	const onSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		setStatus("sending");
		try {
			await sendContactForm({ data: {
				name: String(formData.get("name") ?? ""),
				email: String(formData.get("email") ?? ""),
				message: String(formData.get("message") ?? "")
			} });
			setStatus("sent");
			form.reset();
			setTimeout(() => setStatus("idle"), 3e3);
		} catch (error) {
			console.error("Failed to send contact form", error);
			setStatus("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-20 px-6 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-6xl mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-16 md:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-balance",
						children: [
							"Let's build the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "next vision."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mb-8 text-lg leading-relaxed",
						children: "Open for collaboration, internships, and junior roles. Reach out and I'll get back within a day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								href: personal.socials.github,
								label: "GitHub",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								href: personal.socials.linkedin,
								label: "LinkedIn",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								href: `mailto:${personal.socials.email}`,
								label: "Email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								href: personal.socials.instagram,
								label: "Instagram",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "bg-card p-8 rounded-2xl border border-border space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "name",
								type: "text",
								placeholder: "Full Name",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "email",
								type: "email",
								placeholder: "Email Address",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							placeholder: "Project Details",
							rows: 5,
							required: true,
							className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: status === "sending",
							className: "w-full py-3 bg-foreground text-background font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors tracking-wide",
							children: status === "sending" ? "SENDING..." : status === "sent" ? "MESSAGE SENT ✓" : status === "error" ? "TRY AGAIN" : "SUBMIT INQUIRY"
						}),
						status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-red-500",
							children: "Não consegui enviar a mensagem. Verifique as variáveis de ambiente do SMTP."
						}) : null
					]
				})]
			})
		})
	});
}
function Field(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: "bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
	});
}
function SocialIcon({ href, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		"aria-label": label,
		target: label === "Email" ? void 0 : "_blank",
		rel: label === "Email" ? void 0 : "noreferrer",
		className: "size-10 grid place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors",
		children
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "px-6 py-10 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				personal.name,
				" — Built with React + TS"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Based in — ", personal.location] })]
		})
	});
}
function BackToTop() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setVisible(window.scrollY > 400);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Back to top",
		className: "fixed bottom-8 right-8 size-12 rounded-full bg-card border border-border text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all animate-fade-in grid place-items-center shadow-lg z-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
	});
}
function PortfolioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
		]
	});
}
//#endregion
export { PortfolioPage as component };
