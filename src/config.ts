import type { ProfileConfig, NavbarConfig, ProjectConfig } from "./types/config";

export const profileConfig: ProfileConfig = {
	links: [
		{
			name: "Github",
			url: "https://github.com/loykasi",
			icon: "fa6-brands:github",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/nghiahoang06/",
			icon: "fa6-brands:linkedin",
		},
		{
			name: "Itch.io",
			url: "https://loykas.itch.io/",
			icon: "fa6-brands:itch-io",
		},
		{
			name: "Mail",
			url: "mailto:hoangchungnghia06@gmail.com",
			icon: "fa6-regular:envelope",
		},
	],
	skills: [
		{
			name: "Programming Languages",
			technologies: ["JavaScript", "C#", "Python", "Java"],
		},
		{
			name: "Database",
			technologies: ["MS SQL Server", "MySQL"],
		},
		{
			name: "Frameworks / Platforms",
			technologies: ["ASP.NET MVC", "ASP.NET CORE, jQuery"],
		},
	],
};

export const navbarConfig: NavbarConfig = {
	links: [
		{
			name: "About",
			url: "#about",
		},
		{
			name: "Skills",
			url: "#skills",
		},
		{
			name: "Projects",
			url: "#projects",
		},
	],
};

export const projectConfig: ProjectConfig = {
	groups: [
		{
			year: 2025,
			projects: [
				{
					name: "Lunnidoo Blog Website",
					techStack: ["Vue", "Nuxt", "Express"],
					links: [
						{
							name: "Website",
							url: "https://lunnidoo.pages.dev/"
						},
						{
							name: "Repository",
							url: "https://github.com/loykasi/marble-blog"
						},
					],
					description: "A website where I post blog article and upload my Algodoo scenes.",
					imgs: [
						"/src/assets/images/projects/lunnidoo-blog-home.webp",
						"/src/assets/images/projects/lunnidoo-blog-blog.webp",
						"/src/assets/images/projects/lunnidoo-blog-scenes.webp",
						"/src/assets/images/projects/lunnidoo-blog-article.webp",
					]
				},
				{
					name: "FastAPI Microservice example",
					techStack: ["Python", "FastAPI", "React", "PostgreSQL", "Docker"],
					links: [
						{
							name: "Repository",
							url: "https://github.com/loykasi/fastapi-microservice-example"
						}
					],
					description: "A microservice-based application that crawls data from MobileCity.vn, and provides a simple search web to explore available products.",
					imgs: []
				}
			]
		},
		{
			year: 2024,
			projects: [
				{
					name: "Google Play Analytics",
					techStack: ["Python", "FastAPI", "React", "MySQL", "Docker"],
					links: [
						{
							name: "Repository",
							url: "https://github.com/loykasi/google-play-analytics"
						}
					],
					description: "A microservices-based application that crawls app data from Google Play, analyzes trends, predicts future metrics, and provides a web-based dashboard for visualizing graphs, forecasts, and summaries.",
					imgs: [
						"/src/assets/images/projects/gplay-analytics-1.webp",
						"/src/assets/images/projects/gplay-analytics-2.webp",
						"/src/assets/images/projects/gplay-analytics-3.webp",
						"/src/assets/images/projects/gplay-analytics-4.webp",
						"/src/assets/images/projects/gplay-analytics-5.webp",
					]
				},
				{
					name: "Laravel Task Management",
					techStack: ["PHP", "Laravel", "MySQL", "React"],
					links: [
						{
							name: "Repository",
							url: "https://github.com/loykasi/cnm-laravel-task-management"
						}
					],
					description: "A Trello-inspired task management app featuring core functionalities such as creating lists and cards, as well as intuitive drag-and-drop support for organizing tasks efficiently.",
					imgs: []
				},
				{
					name: "Company Task Management Website",
					techStack: ["ASP.NET Core", "MS SQL Server", "Bootstrap", "JQuery"],
					links: [
						{
							name: "Repository",
							url: "https://github.com/loykasi/Study.CompanyManagementWeb"
						}
					],
					description: "A demo website to manage work tasks and schedules for a company.",
					imgs: []
				},
				{
					name: "Food Safety Management Website",
					techStack: ["ASP.NET Core", "MS SQL Server", "Bootstrap", "JQuery"],
					links: [
						{
							name: "Repository",
							url: "https://github.com/loykasi/FoodSafetyManagementWebsiteDemo_Group37"
						}
					],
					description: "A website to manage food businesses, allowing users to view and report businesses that violate food safety policies.",
					imgs: []
				}
			]
		}
	]
}